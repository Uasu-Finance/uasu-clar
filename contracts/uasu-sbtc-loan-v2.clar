;;(use-trait cb-trait 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dlc-link-callback-trait-v1.dlc-link-callback-trait-v1)
;;(impl-trait 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dlc-link-callback-trait-v1.dlc-link-callback-trait-v1)
(use-trait cb-trait 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dlc-link-callback-trait-v1-1.dlc-link-callback-trait-v1-1)
(impl-trait 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dlc-link-callback-trait-v1-1.dlc-link-callback-trait-v1-1)

;; Error constants
(define-constant err-cant-unwrap (err u1000))
(define-constant err-contract-call-failed (err u1001))
(define-constant err-cant-get-loan-id-by-uuid (err u1002))
(define-constant err-cant-unwrap-check-liquidation (err u1003))
(define-constant err-cant-unwrap-liquidate-loan (err u1004))
(define-constant err-unauthorised (err u1005))
(define-constant err-unknown-loan-contract (err u1006))
(define-constant err-does-not-need-liquidation (err u1007))
(define-constant err-dlc-already-funded (err u1008))
(define-constant err-dlc-not-funded (err u1009))
(define-constant err-stablecoin-issue-failed (err u1010))
(define-constant err-stablecoin-repay-failed (err u1011))
(define-constant err-balance-negative (err u1012))
(define-constant err-not-repaid (err u1013))
(define-constant err-borrow-limit-reached (err u1014))
(define-constant err-contract-return-failed (err u1015))

;; Status Enum
(define-constant status-ready "ready")
(define-constant status-funded "funded")
(define-constant status-pre-repaid "pre-repaid")
(define-constant status-repaid "repaid")
(define-constant status-pre-liquidated "pre-liquidated")
(define-constant status-liquidated "liquidated")

(define-constant ten-to-power-2 u100)
(define-constant ten-to-power-4 u10000)
(define-constant ten-to-power-6 u1000000)
(define-constant ten-to-power-8 u100000000)
(define-constant ten-to-power-12 u1000000000000)
(define-constant ten-to-power-16 u10000000000000000)

;; Contract owner
(define-constant contract-owner tx-sender)

;; Contract name bindings
(define-constant sample-protocol-contract .uasu-sbtc-loan-v2)
(define-constant dlc-manager-address 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dlc-manager-v1-1)

(define-data-var protocol-wallet-address principal 'ST3NBRSFKX28FQ2ZJ1MAKX58HKHSDGNV5N7R21XCP)

(define-public (set-protocol-wallet-address (address principal))
  (begin
    (asserts! (is-eq contract-owner tx-sender) err-unauthorised)
    (var-set protocol-wallet-address address)
    (ok address)
  )
)
(define-read-only (get-protocol-wallet-address)
  (ok (var-get protocol-wallet-address))
)

(define-data-var liquidation_ratio uint u14000)

(define-public (set-liquidation-ratio (ratio uint))
  (begin
    (asserts! (is-eq contract-owner tx-sender) err-unauthorised)
    (var-set liquidation_ratio ratio)
    (ok ratio)
  )
)

(define-read-only (get-liquidation-ratio)
  (ok (var-get liquidation_ratio))
)

(define-data-var liquidation_fee uint u1000)

(define-public (set-liquidation-fee (fee uint))
  (begin
    (asserts! (is-eq contract-owner tx-sender) err-unauthorised)
    (var-set liquidation_fee fee)
    (ok fee)
  )
)

(define-read-only (get-liquidation-fee)
  (ok (var-get liquidation_fee))
)

;; @desc A map to store "loans": information about a DLC
(define-map loans
  uint ;; The loan-id
  {
    dlc_uuid: (optional (buff 32)),
    ;; Other data about the loan and their specific contract
    status: (string-ascii 14),
    vault-loan: uint, ;; the borrowed amount
    vault-collateral: uint, ;; btc deposit in sats
    liquidation-ratio: uint, ;; the collateral/loan ratio below which liquidation can happen, with two decimals precision (140% = u14000)
    liquidation-fee: uint,  ;; additional fee taken during liquidation, two decimals precision (10% = u1000)
    owner: principal, ;; the stacks account owning this loan
    attestors: (list 32 (tuple (dns (string-ascii 64)))),
    btc-tx-id: (optional (string-ascii 64))
  }
)

;; @desc A map to store loans belonging to a principal
(define-map creator-loan-ids principal (list 50 uint))

;; @desc A map to link uuids and loan-ids
;; used to reverse-lookup loan-ids when the dlc-manager contract gives us a UUID
(define-map uuid-loan-id
  (buff 32)
  uint
)

(define-read-only (get-loan (loan-id uint))
  (map-get? loans loan-id)
)

(define-read-only (get-loan-id-by-uuid (uuid (buff 32)))
  (map-get? uuid-loan-id uuid)
)

;; @desc get all loan IDs for given creator
(define-read-only (get-creator-loan-ids (creator principal))
  (default-to
    (list)
    (map-get? creator-loan-ids creator)
  )
)

;; @desc get all loans info for given creator
(define-read-only (get-creator-loans (creator principal))
  (let (
    (loan-ids (get-creator-loan-ids creator))
  )
    (map get-loan loan-ids)
  )
)

;; An auto-incrementing loan-id will be used to know which incoming uuid is connected to which loan
(define-data-var last-loan-id uint u0)

(define-read-only (get-last-loan-id)
  (ok (var-get last-loan-id))
)

(define-read-only (get-loan-by-uuid (uuid (buff 32)))
  (let (
    (loan-id (unwrap! (get-loan-id-by-uuid uuid ) err-cant-get-loan-id-by-uuid ))
    (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
    )
    (ok loan)
  )
)

(define-private (shift-value (value uint) (shift uint))
  (* value shift)
)

(define-private (unshift-value (value uint) (shift uint))
  (/ value shift)
)

(define-private (set-status (loan-id uint) (new-status (string-ascii 14)))
  (let (
    (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
    )
    (begin
      (map-set loans loan-id (merge loan { status: new-status }))
      (print { loan-id: loan-id, uuid: (get dlc_uuid loan), status: (get status loan) })
    )
    (ok true)
  )
)



;; ---------------------------------------------------------
;; Main Functions
;; ---------------------------------------------------------

;; @desc An example function to initiate the creation of a DLC loan.
;; - Increments the loan-id
;; - Calls the dlc-manager-contract's create-dlc function to initiate the creation
;; The DLC Contract will call back into the provided 'target' contract with the resulting UUID (and the provided loan-id).
;; See scripts/setup-loan.ts for an example of calling it.
(define-public (setup-loan (attestors (list 32 (tuple (dns (string-ascii 64))))) (value-locked uint) (refund-delay uint) (btc-fee-recipient (string-ascii 64)) (btc-fee-basis-points uint))
    (let
      (
        (liquidation-ratio (var-get liquidation_ratio))
        (liquidation-fee (var-get liquidation_fee))
        (loan-id (+ (var-get last-loan-id) u1))
        (target sample-protocol-contract)
        (current-loan-ids (get-creator-loan-ids tx-sender))
          ;; Call to create-dlc returns the list of attestors, as well as the uuid of the dlc
        (uuid (unwrap! (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dlc-manager-v1-1 create-dlc value-locked target (var-get protocol-wallet-address) refund-delay btc-fee-recipient btc-fee-basis-points) err-contract-call-failed))
        ;;(attestors (get attestors create-return))
      )
      (var-set last-loan-id loan-id)
      (begin
          (map-set loans loan-id {
            dlc_uuid: (some uuid),
            status: status-ready,
            vault-loan: u0,
            vault-collateral: value-locked,
            liquidation-ratio: liquidation-ratio,
            liquidation-fee: liquidation-fee,
            owner: tx-sender,
            attestors: attestors,
            btc-tx-id: none
          })
          (try! (set-status loan-id status-ready))
          (map-set creator-loan-ids tx-sender (unwrap-panic (as-max-len? (append current-loan-ids loan-id) u50)))
          (map-set uuid-loan-id uuid loan-id)
          (ok uuid)
      )
    )
)

;; @desc Externally set a given DLCs status to funded.
;; Called by the dlc-manager contract after the necessary BTC events have happened.
(define-public (set-status-funded (uuid (buff 32)) (btc-tx-id (string-ascii 64)))
  (let (
    (loan-id (unwrap! (get-loan-id-by-uuid uuid ) err-cant-get-loan-id-by-uuid ))
    (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
    )
    (asserts! (is-eq contract-caller dlc-manager-address) err-unauthorised)
    (asserts! (not (is-eq (get status loan) status-funded)) err-dlc-already-funded)
    (begin
      (map-set loans loan-id (merge loan { btc-tx-id: (some btc-tx-id) }))
      (try! (set-status loan-id status-funded))
    )
    (ok true)
  )
)

;; amount is sBTC and has 8 decimals
(define-public (borrow (loan-id uint) (amount uint))
  (let (
      (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
      (vault-loan-amount (get vault-loan loan))
      (collateral (get vault-collateral loan))
      (next-amount (+ amount vault-loan-amount))
    )
    (asserts! (is-eq (get owner loan) tx-sender) err-unauthorised)
    (asserts! (is-eq (get status loan) status-funded) err-dlc-not-funded)
    (asserts! (<= next-amount collateral) err-borrow-limit-reached)
    (map-set loans loan-id (merge loan { vault-loan: (+ vault-loan-amount amount) }))
    (unwrap! (ok (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.asset-3 transfer amount sample-protocol-contract (get owner loan) none)) err-stablecoin-issue-failed)
  )
)

(define-public (repay (loan-id uint) (amount uint))
  (let (
      (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
      (vault-loan-amount (get vault-loan loan))
    )
    (asserts! (is-eq (get owner loan) tx-sender) err-unauthorised)
    (asserts! (is-eq (get status loan) status-funded) err-dlc-not-funded)
    (asserts! (>= vault-loan-amount amount) err-balance-negative)
    (map-set loans loan-id (merge loan { vault-loan: (- vault-loan-amount amount) }))
    (unwrap! (ok (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.asset-3 transfer amount (get owner loan) sample-protocol-contract none)) err-stablecoin-repay-failed)
  )
)

;; @desc An example function for closing the loan and initiating the closing of a DLC.
(define-public (close-loan (loan-id uint))
  (let (
      (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
      (uuid (unwrap! (get dlc_uuid loan) err-cant-unwrap))
    )
    (begin
      (asserts! (is-eq (get vault-loan loan) u0) err-not-repaid)
      (try! (set-status loan-id status-pre-repaid))
      (unwrap! (ok (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dlc-manager-v1-1 close-dlc uuid u0)) err-contract-call-failed)
    )
  )
)

;; @desc Callback function: called after sucessful DLC closing
;; Implemented from the trait
;; When this function is called by the dlc-manager contract, we know the closing was successful, so we can finalise changes in this contract.
(define-public (post-close-dlc-handler (uuid (buff 32)) (btc-tx-id (string-ascii 64)))
  (let (
    (loan-id (unwrap! (get-loan-id-by-uuid uuid ) err-cant-get-loan-id-by-uuid ))
    (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
    (currstatus (get status loan) )
    (newstatus  (unwrap! (if (is-eq currstatus status-pre-repaid)
                    (ok status-repaid)
                    (ok status-liquidated)
            ) err-cant-unwrap)
    ))
    (begin
      (map-set loans loan-id (merge loan { btc-tx-id: (some btc-tx-id) }))
      (try! (set-status loan-id newstatus))
    )
    (ok true)
  )
)

;; @desc Liquidates loan if necessary at given level
(define-public (attempt-liquidate (loan-id uint))
  (begin
    (asserts! (unwrap! (check-liquidation loan-id) err-cant-unwrap-check-liquidation) err-does-not-need-liquidation)
    (print { liquidator: tx-sender })
    (liquidate-loan loan-id)
  )
)

;; if (amount borrowed/collateral)*100 >= ratio then true
(define-read-only (check-liquidation (loan-id uint))
  (let (
    (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
    (collateral (get vault-collateral loan))
    (loan-amount (get vault-loan loan))
    )
    (ok (>= (* loan-amount u10000) (* collateral (get liquidation-ratio loan))))
  )
)

;; @desc An example function to initiate the liquidation of a DLC loan contract.
;; If liquidation is required, this function will initiate a simple close-dlc flow with the calculated payout-ratio
(define-private (liquidate-loan (loan-id uint))
  (let (
      (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
      (uuid (unwrap! (get dlc_uuid loan) err-cant-unwrap))
      (payout-ratio (unwrap! (get-payout-ratio loan-id) err-cant-unwrap))
    )
    (begin
      (try! (set-status loan-id status-pre-liquidated))
      (unwrap! (ok (as-contract (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dlc-manager-v1-1 close-dlc uuid payout-ratio))) err-contract-call-failed)
    )
  )
)

;; @desc Returns the resulting payout-ratio at the given btc-price (shifted by 10**8).
;; This value is sent to the Oracle system for signing a point on the linear payout curve.
;; using uints, this means return values between 0-10000 (0.00-100.00)
;; 0.00 means the borrower gets back its deposit, 100.00 means the entire collateral gets taken by the protocol.
(define-read-only (get-payout-ratio (loan-id uint))
  (let 
    (
      (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
      (borrowed-amount (get vault-loan loan))
      (total-locked (get vault-collateral loan))
      (fee (/ (* (var-get liquidation_fee) borrowed-amount) u10000))
      (borrowed-plus-liquidation (+ borrowed-amount fee))
    )
    (begin 
      (if (>= borrowed-plus-liquidation total-locked)
          (ok u10000)
          (ok (/ (* borrowed-plus-liquidation u10000) total-locked))
      )
    )

  )
)