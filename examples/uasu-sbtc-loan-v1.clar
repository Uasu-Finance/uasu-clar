;;
(use-trait cb-trait 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dlc-link-callback-trait-v1.dlc-link-callback-trait-v1)
(impl-trait 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dlc-link-callback-trait-v1.dlc-link-callback-trait-v1)

;; Error constants
(define-constant err-cant-unwrap (err u1000))
(define-constant err-contract-call-failed (err u1001))
(define-constant err-cant-get-loan-id-by-uuid (err u1002))
(define-constant err-cant-unwrap-check-liquidation (err u1003))
(define-constant err-cant-unwrap-liquidate-loan (err u1004))
(define-constant err-unauthorised (err u1005))
(define-constant err-unknown-loan-contract (err u1006))
(define-constant err-doesnt-need-liquidation (err u1007))
(define-constant err-dlc-already-funded (err u1008))
(define-constant err-dlc-not-funded (err u1009))
(define-constant err-stablecoin-issue-failed (err u1010))
(define-constant err-stablecoin-repay-failed (err u1011))
(define-constant err-balance-negative (err u1012))
(define-constant err-not-repaid (err u1013))
(define-constant err-cant-get-loan-borrowed-amounts (err u1014))
(define-constant err-cant-get-cumulative-interests (err u1015))
(define-constant err-in-getting-insterests (err u1016))

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
(define-constant sample-protocol-contract .uasu-sbtc-loan-v1)

;; Rafa experiment
(define-data-var interest uint u150) ;; 1.50% interest

(define-data-var protocol-wallet-address principal 'ST3NBRSFKX28FQ2ZJ1MAKX58HKHSDGNV5N7R21XCP)

(define-public (set-protocol-wallet-address (address principal))
  (begin
    (asserts! (is-eq contract-owner tx-sender) err-unauthorised)
    (var-set protocol-wallet-address address)
    (ok address)
  )
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

(define-data-var liquidation_fee uint u1000) ;; revisit this especially with scale precision

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
    vault-loan: uint, ;; the borrowed amount ;; Rafa we don't need this because they can borrow multiple times and we need to record b-heights
    vault-collateral: uint, ;; btc deposit in sats
    liquidation-ratio: uint, ;; the collateral/loan ratio below which liquidation can happen, with two decimals precision (140% = u14000)
    liquidation-fee: uint,  ;; additional fee taken during liquidation, two decimals precision (10% = u1000)
    owner: principal, ;; the stacks account owning this loan
    attestors: (list 32 (tuple (dns (string-ascii 64)))),
    btc-tx-id: (optional (string-ascii 64)),
    borrowed-amounts: (list 10 (tuple (amount uint) (b-height uint))),
    interest-adjust: uint ;; when we repay, we set b-height to current block height and whatever amount in interest is not repaid, we add it to this interest-adjust
  }
)

;; we need to record the amount and block height when they borrowed
;; we allow them to borrow 10 times different amounts per each loan and record the amount and block height when they borrowed
;; so we need a list of max 10 tuples (amount uint, block-height uint) per loan
(define-map loan-borrowed-amounts
  uint ;; The loan-id
  (list 10 (tuple (amount uint) (b-height uint)))
)
;; this is a duplicate above, we can remove it

;; we need to record the amount and block height when they borrow and repay
;; let's have a private function for this
(define-private (record-borrowed-amount (loan-id uint) (amount uint))
  (let
    (
      (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
      (current-borrowed-amounts (get borrowed-amounts loan))
      ;; (current-borrowed-amounts (unwrap! (map-get? loan-borrowed-amounts loan-id) err-cant-get-loan-borrowed-amounts))
    )
    (begin
      (map-set loan-borrowed-amounts loan-id (unwrap-panic (as-max-len? (append current-borrowed-amounts {amount: amount, b-height: block-height}) u10)))
    )
    (ok true)
  )
)
;; we need to modify borrow function
;; what do we do when they repay but not the totality?
;; if they don't repay to totality of the interests, we add the interests still du in the interest-adjust and we set the b-height to current block height
;; if they pay the totality of the intersts, we simply need to record the reduced amount repaid in the loan-borrowed-amounts map
;; let's to a private function for this
(define-private (record-repaid-amount (loan-id uint) (amount uint))
  (let
    (
      (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
      (current-borrowed-amounts (get borrowed-amounts loan))
      ;; (current-borrowed-amounts (unwrap! (map-get? loan-borrowed-amounts loan-id) err-cant-get-loan-borrowed-amounts))
      ;; here we need the present value of the borrowed amount and a way to identify up to which borrowed amount they repay
      ;; we need to calculate the present value of the borrowed amount


    )
    (begin
    ;; some logic that compares the cumulative interest to the amount user repays
    ;; if repayment amount > cumulative interest rates, we set the b-height to current block height and simply need to reduce the amount
    ;; if repayment amount < cumulative interest rates, we we set the b-height to current block height and we add the remaining interest due to the interest-adjust


      (map-set loan-borrowed-amounts loan-id (unwrap-panic (as-max-len? (append current-borrowed-amounts {amount: amount, b-height: block-height}) u10)))
    )
    (ok true)
  )
)
;; helper and private function for repay
(define-data-var left-helper uint u0)
(define-data-var interest-helper uint u0)
(define-private (func-deduce-left (borrowed-amount uint))
  (let
    (
      (left-over (var-get left-helper))
    )
    (begin
      (if (> left-over borrowed-amount)
        (begin
          (var-set left-helper (- left-over borrowed-amount))
          {amount: u0, b-height: u0}
        )
        (begin
          (var-set left-helper u0)
          {amount: (- borrowed-amount left-over), b-height: block-height} ;; there is nothing to adjust in interests left-over is 0
        )
      )
    )
  )
)
(define-private (func-deduce-interests (borrowed-amount uint))
  (let
    (
      (left-over (var-get left-helper))
      (amount-interest (unwrap-panic (get-interest-amount borrowed-amount))) ;; 10^2 precision
    )
      (if (> left-over amount-interest)
        (begin
          (var-set left-helper (- left-over amount-interest))
          {amount: borrowed-amount, b-height: block-height}
        )
        (begin
          (var-set left-helper u0)
          (var-set interest-helper (- amount-interest left-over))
          {amount: borrowed-amount, b-height: block-height}
        )
      )
  )
)

(define-public (repay (loan-id uint) (repaying-amount uint))
  (let
    (
      (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
      (current-interest-adjust (get interest-adjust loan))
      (current-borrowed-amounts (get borrowed-amounts loan))
      (current-borrowed-amounts-only (map get-amount current-borrowed-amounts))
      ;; we need to calculate the total cumulative interests of the loan-borrowed-amounts
      (list-of-interests (map get-interests current-borrowed-amounts) )
      (cumulative-interests (fold + list-of-interests u0))
      (total-interests (+ cumulative-interests (get interest-adjust loan)))
      ;; we need to calculate the total outstanding
      ;; it comes from the sum of the borrowed amounts
      (list-of-borrowed-amounts (map get-amount current-borrowed-amounts) )
      (total-borrowed (fold + list-of-borrowed-amounts u0))
      ;; we need to calculate the present value of the borrowed amount
      (present-value (+ total-borrowed total-interests))
      (left-after-paying-interest (- repaying-amount total-interests))
    )
      (asserts! (is-eq (get owner loan) tx-sender) err-unauthorised)
      (asserts! (is-eq (get status loan) status-funded) err-dlc-not-funded)
      (asserts! (> present-value repaying-amount) err-balance-negative)
      ;; now we compare the repaying amount to the cumulative interests
      ;; if repaying amount > cumulative interests, we set the b-height to current block height and simply need to reduce the amount
      ;; if repaying amount < cumulative interests, we we set the b-height to current block height and we add the remaining interest due to the interest-adjust
      (if (> repaying-amount total-interests)
          (begin
          (var-set left-helper left-after-paying-interest)
          (map-set loans loan-id (merge loan { borrowed-amounts: (map func-deduce-left current-borrowed-amounts-only) }))
          )
          (begin
          (var-set left-helper (* left-after-paying-interest u100)) ;; 10^2 precision like interests
           ;; this is where we have to wipe out the b-heights up to a certain borrowed amount tuple
            ;; so here repaying amount doesn't cover or is equal to total interests
            (map-set loans loan-id (merge loan { borrowed-amounts: (map func-deduce-interests current-borrowed-amounts-only) }))
            ;; we need to add interest-helper to whatever was already there in interest-adjust
            (map-set loans loan-id (merge loan { interest-adjust: (+ current-interest-adjust  (/ (var-get interest-helper) u100)) }))
          )
      )
      (ok true)
  )
)



;; Chat GPT advice:
(define-constant seconds-per-year u31536000)
(define-constant seconds-per-block u600) ;; update this with Nakamoto to u5 seconds per block
;; 10 minutes = 600 seconds

;; Function to calculate interest on a single borrowing amount tuple with its b-height

;; To fix this, you need to modify your get-interests function to take a single tuple as an argument, which it will then unpack into borrowed-amount and borrowed-at. Here's how you can adjust your function:

(define-private (get-interests (borrowed-data (tuple (amount uint) (b-height uint))))
  (let (
    (borrowed-amount (get amount borrowed-data))
    (borrowed-at (get b-height borrowed-data))
    (current-block-height block-height)
    ;; (current-block-height u500)
    (time-difference-in-seconds (* (- current-block-height borrowed-at) seconds-per-block))
    (time-difference-in-years  (/ (* time-difference-in-seconds u10000) seconds-per-year)) ;; 10^4 scale factor 1

    ;; (compound-factor (pow (+ u1 (/ (/ (var-get interest) u10000) u1)) (* u1 time-difference-in-years)))

    (interest-times-time-in-a-year (* time-difference-in-years (var-get interest))) ;; interest already has a 10^4 scale factor 2
    ;; -> 10^8 scale factor
    (interests (/ (* borrowed-amount interest-times-time-in-a-year) u1000000)) ;; interest-only has a 10^2 scale factor
    ;; simple interest (no compound pow at a fraction in clarity is a pain in the ass?)
    ;; (interests (* borrowed-amount compound-factor))
  )
    interests ;; scale factor of 10^8 to have it in the unit of borrowed amounts
  )
)

;; Interest First Repayment
;; Principal Repayment After Interest Clearance
;; Cumulative Interest Calculation (not Sequential)

    ;; here it would be cool to get the list of borrowed amounts and calculate the present value of each one and spit out a list
    ;; this list compared to the repaid amount allows us to identify up to which borrowed amount they repay

;; (define-public (RafaCalcul (a uint) (b uint))
;;   (ok (/ (* a u10000) b)) ;; this gives cents: 27 is in fact 0.0027%
;; )

;; Function to calculate total interest plus principal owed on all borrowing amounts
;; We already have get-interest-plus-principal function that spits out the interest plus principal for a single borrowing amount
;; We need to apply this function to all borrowing amounts and sum them up
;; We can use the map function to apply the get-interest-plus-principal function to all borrowing amounts
;; We can use the fold function to sum up the results
;; (define-read-only (get-total-interest-plus-principal (loan-id uint))
;;   (let
;;     (
;;     (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
;;     (borrowed-amounts (unwrap! (map-get? loan-borrowed-amounts loan-id) err-cant-get-loan-borrowed-amounts))
;;     (interest-plus-principal (fold + (map get-interest-plus-principal borrowed-amounts)))
;;     ;; calculate the total of all borrowed amounts as the total principal
;;     (principal (fold + (map get-amount borrowed-amounts)))
;;     )
;;     (ok interest-plus-principal)
;;   )
;; )

(define-read-only (rafaFolding)
  (let
    (
      (list1 (list {amount: u10, b-height: u1} {amount: u30, b-height: u2}))
      (list-of-amounts (map get-amount list1))
      (total-principal (fold + list-of-amounts u0))
    )
    ;; (ok total-principal)
    ;; print { list-of-amounts: list-of-amounts }
    (print { list-of-amounts: list-of-amounts })
    (ok total-principal)
    )
)


;; Function that takes (tuple (amount uint) (b-height uint)) in and spits out the amount
(define-private (get-amount (input-tuple {amount: uint, b-height: uint}))
  (get amount input-tuple)
)


;; Function to calculate total principal borrowed on all borrowing amounts
(define-read-only (get-total-principal (loan-id uint))
  (let
    (
    (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
    ;; (borrowed-amounts (unwrap! (map-get? loan-borrowed-amounts loan-id) err-cant-get-loan-borrowed-amounts)) ;; this includes the b-heights
    (borrowed-amounts (get borrowed-amounts loan))  ;; this includes the b-heights
    ;; we need to map to get only the amounts from borrowed-amounts
    (borrowed-amounts-only (map get-amount borrowed-amounts))
    (total-borrowed (fold + borrowed-amounts-only u0))
    )
    (ok total-borrowed)
  )
)

;; Function to calculate total interest owed on all borrowing amounts
;; (define-read-only (get-total-interest (loan-id uint))
;;   (let
;;     (
;;     (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
;;     (borrowed-loan-amnts (unwrap! (map-get? loan-borrowed-amounts loan-id) err-cant-get-loan-borrowed-amounts)) ;; this includes the b-heights
;;     ;; we need to map to get the future value of each tuple from borrowed-loan-amnts
;;     (borrowed-loan-amnts-future-values (map get-future-value borrowed-loan-amnts))


;;     )
;;     (ok true)
;;   )
;; )

;; Add logic to apply repayments to the earliest borrowings first
;; and adjust the borrowings records.
;; This function would be more complex and needs careful implementation.


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
;; (define-public (setup-loan (btc-deposit uint) (attestor-ids (buff 32)))
;;     (let
;;       (
;;         (liquidation-ratio (var-get liquidation_ratio))
;;         (liquidation-fee (var-get liquidation_fee))
;;         (loan-id (+ (var-get last-loan-id) u1))
;;         (target sample-protocol-contract)
;;         (current-loan-ids (get-creator-loan-ids tx-sender))
;;           ;; Call to create-dlc returns the list of attestors, as well as the uuid of the dlc
;;         (create-return (unwrap-panic (unwrap! (ok (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dlc-manager-v1 create-dlc target (var-get protocol-wallet-address) attestor-ids)) err-contract-call-failed)))
;;         (attestors (get attestors create-return))
;;         (uuid (get uuid create-return))
;;       )
;;       (var-set last-loan-id loan-id)
;;       (begin
;;           (map-set loans loan-id {
;;             dlc_uuid: (some uuid),
;;             status: status-ready,
;;             vault-loan: u0,
;;             vault-collateral: btc-deposit,
;;             liquidation-ratio: liquidation-ratio,
;;             liquidation-fee: liquidation-fee,
;;             owner: tx-sender,
;;             attestors: attestors,
;;             btc-tx-id: none
;;           })
;;           (try! (set-status loan-id status-ready))
;;           (map-set creator-loan-ids tx-sender (unwrap-panic (as-max-len? (append current-loan-ids loan-id) u50)))
;;           (map-set uuid-loan-id uuid loan-id)
;;           (ok uuid)
;;       )
;;     )
;; )

;; @desc Externally set a given DLCs status to funded.
;; Called by the dlc-manager contract after the necessary BTC events have happened.
(define-public (set-status-funded (uuid (buff 32)))
  (let (
    (loan-id (unwrap! (get-loan-id-by-uuid uuid ) err-cant-get-loan-id-by-uuid ))
    (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
    )
    (asserts! (not (is-eq (get status loan) status-funded)) err-dlc-already-funded)
    (begin
      (try! (set-status loan-id status-funded))
      ;; (map-set loans loan-id (merge loan { status: status-funded }))
    )
    (ok true)
  )
)

;; amount has 6 decimals e.g. $100 = u100000000
(define-public (borrow (loan-id uint) (amount uint))
  (let (
    (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
    (vault-loan-amount (get vault-loan loan))
    )
    (asserts! (is-eq (get owner loan) tx-sender) err-unauthorised)
    (asserts! (is-eq (get status loan) status-funded) err-dlc-not-funded)
    (map-set loans loan-id (merge loan { vault-loan: (+ vault-loan-amount amount) }))
    ;; (unwrap! (ok (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.asset transfer amount sample-protocol-contract (get owner loan) none)) err-stablecoin-issue-failed)
    (ok true)
  )
)



;; (define-public (repay (loan-id uint) (amount uint))
;;   (let (
;;     (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
;;     (vault-loan-amount (get vault-loan loan))
;;     )
;;     (asserts! (is-eq (get owner loan) tx-sender) err-unauthorised)
;;     (asserts! (is-eq (get status loan) status-funded) err-dlc-not-funded)
;;     (asserts! (>= vault-loan-amount amount) err-balance-negative)
;;     (map-set loans loan-id (merge loan { vault-loan: (- vault-loan-amount amount) }))
;;     ;; (unwrap! (ok (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.asset transfer amount (get owner loan) sample-protocol-contract none)) err-stablecoin-repay-failed)
;;     (ok true)
;;   )
;; )

;; @desc An example function for closing the loan and initiating the closing of a DLC.
(define-public (close-loan (loan-id uint))
  (let (
    (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
    (uuid (unwrap! (get dlc_uuid loan) err-cant-unwrap))
    )
    (begin
      (asserts! (is-eq (get vault-loan loan) u0) err-not-repaid)
      (try! (set-status loan-id status-pre-repaid))
      (unwrap! (ok (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dlc-manager-v1 close-dlc uuid u0)) err-contract-call-failed)
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
(define-public (attempt-liquidate (btc-price uint) (uuid (buff 32)))
  (let (
    (loan-id (unwrap! (get-loan-id-by-uuid uuid) err-cant-get-loan-id-by-uuid ))
    ;; (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
    )
    (asserts! (unwrap! (check-liquidation loan-id btc-price) err-cant-unwrap-check-liquidation) err-doesnt-need-liquidation)
    (print { liquidator: tx-sender })
    (ok (unwrap! (liquidate-loan loan-id btc-price) err-cant-unwrap-liquidate-loan))
  )
)

;; @desc Helper function to calculate if a loan is underwater at a given BTC price
(define-read-only (check-liquidation (loan-id uint) (btc-price uint))
  (let (
    (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
    (collateral-value (get-collateral-value (get vault-collateral loan) btc-price))
    (strike-price (/ (* (get vault-loan loan) (get liquidation-ratio loan)) u100000000))
    )
    (ok (<= collateral-value strike-price))
  )
)

;; @desc Calculating loan collateral value for a given btc-price * (10**8), with pennies precision.
;; Since the deposit is in Sats, after multiplication we first shift by 2, then ushift by 16 to get pennies precision ($12345.67 = u1234567)
(define-private (get-collateral-value (btc-deposit uint) (btc-price uint))
  (unshift-value (shift-value (* btc-deposit btc-price) ten-to-power-2) ten-to-power-16)
)

;; @desc An example function to initiate the liquidation of a DLC loan contract.
;; If liquidation is required, this function will initiate a simple close-dlc flow with the calculated payout-ratio
(define-private (liquidate-loan (loan-id uint) (btc-price uint))
  (let (
    (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
    (uuid (unwrap! (get dlc_uuid loan) err-cant-unwrap))
    (payout-ratio (unwrap! (get-payout-ratio loan-id btc-price) err-cant-unwrap))
    )
    (begin
      (try! (set-status loan-id status-pre-liquidated))
      (unwrap! (ok (as-contract (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dlc-manager-v1 close-dlc uuid payout-ratio))) err-contract-call-failed)
    )
  )
)

;; @desc Returns the resulting payout-ratio at the given btc-price (shifted by 10**8).
;; This value is sent to the Oracle system for signing a point on the linear payout curve.
;; using uints, this means return values between 0-10000 (0.00-100.00)
;; 0.00 means the borrower gets back its deposit, 100.00 means the entire collateral gets taken by the protocol.
(define-read-only (get-payout-ratio (loan-id uint) (btc-price uint))
  (let (
    (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
    (collateral-value (get-collateral-value (get vault-collateral loan) btc-price))
    ;; the ratio the protocol has to sell to liquidators:
    (sell-to-liquidators-ratio (/ (shift-value (get vault-loan loan) ten-to-power-12) collateral-value))
    ;; the additional liquidation-fee percentage is calculated into the result. Since it is shifted by 10000, we divide:
    (payout-ratio-precise (+ sell-to-liquidators-ratio (* (/ sell-to-liquidators-ratio u10000) (get liquidation-fee loan))))
    ;; The final payout-ratio is a truncated version:
    (payout-ratio (unshift-value payout-ratio-precise ten-to-power-12))
    )
    ;; We cap result to be between the desired bounds
    (begin
      (if (unwrap! (check-liquidation loan-id btc-price) err-cant-unwrap)
          (if (>= payout-ratio (shift-value u1 ten-to-power-4))
            (ok (shift-value u1 ten-to-power-4))
            (ok payout-ratio))
        (ok u0)
      )
    )
  )
)




(define-public (get-interest)
  (ok (var-get interest))
)

(define-public (change-interest (new-interest uint))
  (let
    (
      (old-interest (var-get interest))
    )
    ;; assert that only the contract owner can change the interest
    (asserts! (is-eq contract-owner tx-sender) err-unauthorised)
      (var-set interest new-interest)
      (ok new-interest)
  )
)
;; interest amount is calculated as vault-loan-amount * interest / 10000 * (time passed in seconds since they borrowed / 31536000)
;; 31536000 is the number of seconds in a year
;; in borrow function we have to record the amount and block height when they borrowed

;; therefore we can deduct the time passed in seconds since they borrowed: (current-block-height - block-height-when-they-borrowed) * 5 because 1 block is 5 seconds
;; we can use the same function to calculate the interest amount when they repay / close the loan
;; we can use the same function to calculate the interest amount when they liquidate
;; is there another way to calculate the time passed using the timestamp?
(define-read-only (get-interest-amount (loan-id uint))
  (let
    (
      (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
      (vault-loan-amount (get vault-loan loan))
      (interest-amount (/ (* vault-loan-amount (var-get interest)) u10000));; 10^2 precision
    )
    (ok interest-amount)
  )
)
;; (define-read-only (get-interest-amount (loan-id uint))
;;   (let
;;     (
;;       (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
;;       (vault-loan-amount (get vault-loan loan))
;;       (interest-amount (/ (* vault-loan-amount (var-get interest)) u10000))
;;     )
;;     (ok interest-amount)
;;   )
;; )
