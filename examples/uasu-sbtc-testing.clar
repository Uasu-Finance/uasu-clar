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
(define-constant err-transfer-sbtc (err u1010))
(define-constant err-stablecoin-repay-failed (err u1011))
(define-constant err-balance-negative (err u1012))
(define-constant err-not-repaid (err u1013))
(define-constant err-cant-get-loan-borrowed-amounts (err u1014))
(define-constant err-cant-get-cumulative-interests (err u1015))
(define-constant err-in-getting-insterests (err u1016))
(define-constant err-cannot-borrow-liquidation-ratio (err u1017))
(define-constant err-cant-record-ba (err u1018))
(define-constant err-present-value-loan (err u1019))
(define-constant err-protocol-under-water (err u1020))
(define-constant err-liquidation-fee-too-high (err u1021))

;; Status Enum
(define-constant status-ready "ready")                    ;; setup-loan sets status-ready (ok)
(define-constant status-funded "funded")                  ;; set-status-funded - Limit this to dlc-manager-contract
(define-constant status-pre-repaid "pre-repaid")          ;; close-loan sets status-pre-repaid - only loan owner can call it (ok)
(define-constant status-repaid "repaid")                  ;; post-close-dlc-handler sets status-repaid ;; Limit this to dlc-manager-contract
(define-constant status-pre-liquidated "pre-liquidated")  ;; liquidate-loan sets status-pre-liquidated ;; anyone can call it (ok)
(define-constant status-liquidated "liquidated")          ;; post-close-dlc-handler sets status-liquidated ;; Limit this to dlc-manager-contract

(define-constant ten-to-power-2 u100)
(define-constant ten-to-power-4 u10000)
(define-constant ten-to-power-6 u1000000)
(define-constant ten-to-power-8 u100000000)
(define-constant ten-to-power-12 u1000000000000)
(define-constant ten-to-power-16 u10000000000000000)

(define-constant list-borrowed-empty (list ))

;; {amount: u0, b-height: u0} {amount: u0, b-height: u0} {amount: u0, b-height: u0} {amount: u0, b-height: u0} {amount: u0, b-height: u0} {amount: u0, b-height: u0} {amount: u0, b-height: u0} {amount: u0, b-height: u0} {amount: u0, b-height: u0} {amount: u0, b-height: u0}

;; Contract owner
(define-constant contract-owner tx-sender)

;; Contract name bindings
(define-constant sample-protocol-contract .uasu-sbtc-loan-v1)

;; Rafa experiment
(define-data-var interest uint u150) ;; 1.50% interest

(define-data-var protocol-wallet-address principal 'ST3NBRSFKX28FQ2ZJ1MAKX58HKHSDGNV5N7R21XCP)
(define-data-var dlc-manager-contract principal 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dlc-manager-v1) ;; add an assertions to post-close-dlc-handler to check that the dlc-manager-contract is the one calling it

(define-public (set-protocol-wallet-address (address principal))
  (begin
    (asserts! (is-eq contract-owner tx-sender) err-unauthorised)
    (var-set protocol-wallet-address address)
    (ok address)
  )
)

(define-data-var liquidation_ratio uint u105);; sBTC ~ BTC + premium and premium gets arbitraged away; borrow up to ~95.23 of 100 in collateral

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

(define-data-var liquidation_fee uint u75) ;; let's set it to 75% of the difference between the present value and the Bitcoin in collateral when the liquidation function is successfully called: 75% paid to the tx-sender, the other 25% paid to the contract

;; read the liquidation fee
(define-read-only (get-liquidation-fee (loan-id uint))
  (let
    (
      (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
      (liquidation-fee (get liquidation-fee loan))
    )
    (ok liquidation-fee)
  )
)
;; the owner can change the liquidation_fee
(define-public (set-liquidation-fee (fee uint))
  (begin
    (asserts! (is-eq contract-owner tx-sender) err-unauthorised)
    (asserts! (<= fee u100) err-liquidation-fee-too-high)
    (var-set liquidation_fee fee)
    (ok fee)
  )
)

(define-read-only (get-borrowed-amounts (loan-id uint))
      (let
      (
        (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
        (current-borrowed-amounts (get borrowed-amounts loan))
      )
      (ok current-borrowed-amounts)
      )
)

(define-data-var minimum-liquidation-amount uint u100) ;; on mainnet change this to u100,000 sats

(define-public (set-minimum-liquidation-amount (amount uint))
  (begin
    (asserts! (is-eq contract-owner tx-sender) err-unauthorised)
    ;; (asserts! (> amount u100000) err-minimum-liquidation-amount-too-low) ;; leaving this open but owner of contract can attack here?
    (var-set minimum-liquidation-amount amount)
    (ok amount)
  )
)

;; let's read what my liquidation level is
(define-read-only (get-liquidation-level (loan-id uint))
  (let
    (
      (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
      (vault-collateral (get vault-collateral loan))
      (liquidation-ratio (get liquidation-ratio loan))
      (liquidation-level (* (/ vault-collateral liquidation-ratio) u100))
    )
    (ok liquidation-level)
  )
)
;; ---------------------------------------------------------
;; Data maps
;; ---------------------------------------------------------

;; @desc A map to store "loans": information about a DLC
(define-map loans
  uint ;; The loan-id
  {
    dlc_uuid: (optional (buff 32)),
    ;; Other data about the loan and their specific contract
    status: (string-ascii 14),
    vault-collateral: uint, ;; btc deposit in sats
    liquidation-ratio: uint, ;; the collateral/loan ratio below which liquidation can happen, with two decimals precision (140% = u14000)
    liquidation-fee: uint,  ;; additional fee taken during liquidation, two decimals precision (10% = u1000)
    owner: principal, ;; the stacks account owning this loan
    attestors: (list 32 (tuple (dns (string-ascii 64)))),
    btc-tx-id: (optional (string-ascii 64)),
    borrowed-amounts: (list 10 (tuple (amount uint) (b-height uint))),
    interest-adjust: uint ;; when repaying, we set b-height to current block height and whatever amount in interest is not repaid, we add it to this interest-adjust
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


;; ---------------------------------------------------------
;; Read Functions
;; ---------------------------------------------------------

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
      (map-set loans loan-id (merge loan { status: new-status })) ;; sets status to new-status
      (print { loan-id: loan-id, uuid: (get dlc_uuid loan), status: (get status loan) })
    )
    (ok true)
  )
)

(define-read-only (get-interest)
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

(define-public (print-loan (loan-id uint))
  (let
    (
      (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
    )
    ;; print it out
    (print { loan: loan })
    (ok loan)
  )
)

;; ---------------------------------------------------------
;; Private and Public Functions - Rafa's Experiment
;; record-borrowed-amount, repay, get-total-interests and get-total-pinicipal are private functions
;; ---------------------------------------------------------

;; Code for calculating the interests and repaying interests and borrowed amounts

;; we need to record the amount and block height when they borrow
;; let's have a private function for this
(define-private (record-borrowed-amount (loan-id uint) (amount uint))
  (let
    (
      (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
      (current-borrowed-amounts (get borrowed-amounts loan))
    )
    (begin
      (map-set loans loan-id (merge loan { borrowed-amounts: (unwrap-panic (as-max-len? (append current-borrowed-amounts {amount: amount, b-height: block-height}) u10)) })) ;; here we don't have an error message when they borrow an 11th time?
    )
    (ok true)
  )
)

;; helper and private function for repay function
(define-data-var left-helper uint u0)
(define-data-var interest-helper uint u0)
(define-private (func-deduce-left (borrowed-amount uint))
  (let
    (
      (left-over (var-get left-helper)) ;; this is repaying amount - totat-interests
    )
    (begin
      (if (>= left-over borrowed-amount) ;; put b-height to u0 when they repay the entire present-value
        (begin
          (var-set left-helper (- left-over borrowed-amount))
          {amount: u0, b-height: u0} ;; this is what we need to prune from the list
        )
        (begin
          (var-set left-helper u0)
          {amount: (- borrowed-amount left-over), b-height: block-height} ;; there is nothing to adjust in interests left-over is 0
        )
      )
    )
  )
)
(define-private (func-filter-non-zero (item {amount: uint, b-height: uint}))
  (let
    (
      (amount (get amount item))
      (b-height (get b-height item))
    )
    (not (and (is-eq amount u0) (is-eq b-height u0)))
  )
)


(define-private (func-deduce-interests (borrowed-data {amount: uint, b-height: uint}))
  (let
    (
      (left-over (var-get left-helper)) ;; this is the remaining repaying amount
      (borrowed-amount (get amount borrowed-data))
      (amount-interest (get-interests borrowed-data))
      (current-interest-helper (var-get interest-helper))
    )
      (if (> left-over amount-interest)
        (begin
          (var-set left-helper (- left-over amount-interest))
          {amount: borrowed-amount, b-height: block-height}
        )
        (begin
          (var-set left-helper u0)
          (var-set interest-helper (+ current-interest-helper (- amount-interest left-over))) ;; here there is a problem
          {amount: borrowed-amount, b-height: block-height}
        )
      )
  )
)

;; repay public function
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
      ;; (left-after-paying-interest (- repaying-amount total-interests)) ;; this cannot be here Rafa testing else underflow is possible
    )
      (asserts! (is-eq (get owner loan) tx-sender) err-unauthorised)
      ;; (asserts! (is-eq (get status loan) status-funded) err-dlc-not-funded) ;; testing we don't need this Rafa ;; we can only repay when it's in status-funded
      (asserts! (>= present-value repaying-amount) err-balance-negative)
      ;; now we compare the repaying amount to the cumulative interests
      ;; if repaying amount > cumulative interests, we set the b-height to current block height and simply need to reduce the amount
      ;; if repaying amount < cumulative interests, we we set the b-height to current block height and we add the remaining interest due to the interest-adjust
      ;; first we repay the interest-adjust if it's not u0
      ;; if repaying-amount < current-interest-adjust then merge interest-adjust to u0 in loan and exit
      (if (< repaying-amount current-interest-adjust)
          (map-set loans loan-id (merge loan { interest-adjust: (- current-interest-adjust repaying-amount) }))
          (begin
            (if (> (- repaying-amount current-interest-adjust) cumulative-interests)
                (begin
                (var-set left-helper (- (- repaying-amount current-interest-adjust) cumulative-interests))
                (map-set loans loan-id (merge loan { borrowed-amounts: (filter func-filter-non-zero (map func-deduce-left current-borrowed-amounts-only)), interest-adjust: u0 }))
                )
                (begin
                (var-set left-helper (- repaying-amount current-interest-adjust)) ;; error here corrected Rafa
                (var-set interest-helper u0)
                ;; this is where we have to wipe out the b-heights up to a certain borrowed amount tuple
                  (map-set loans loan-id (merge loan { borrowed-amounts: (map func-deduce-interests current-borrowed-amounts), interest-adjust: (var-get interest-helper)  }))
                  ;; (print { borrowed-amounts: (get borrowed-amounts (unwrap! (get-loan loan-id) err-unknown-loan-contract)) })
                  (print {loan: (unwrap! (map-get? loans loan-id) err-unknown-loan-contract)})  ;; *1 therefore new current-interest-adjust is u0 and no need to add it here
                  (var-set interest-helper u0) ;; set it back to 0
                )
            )
          )
      )
      ;; Don't forget to repay the contract the repaying-amount ;; testing we DO need this Rafa!
      (try! (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.asset transfer repaying-amount (get owner loan) sample-protocol-contract none))
      (ok repaying-amount)
  )
)
;; A model to calculate the time passing by and deducing the interest amount
;; Repay Interest First, then repay borrowed-amounts
;; Cumulative Interest Calculation (not Sequential)
(define-constant seconds-per-year u31536000)
(define-constant seconds-per-block u600) ;; update this with Nakamoto to u5 seconds per block ;; 10 minutes = 600 seconds

;; Function to calculate interest on a single borrowing amount tuple with its b-height
(define-private (get-interests (borrowed-data (tuple (amount uint) (b-height uint))))
  (let (
    (borrowed-amount (get amount borrowed-data))
    (borrowed-at (get b-height borrowed-data))
    (current-block-height block-height)

    (time-difference-in-seconds (* (- current-block-height borrowed-at) seconds-per-block))
    (time-difference-in-years  (/ (* time-difference-in-seconds u10000) seconds-per-year)) ;; 10^4 scale factor 1
    ;; (compound-factor (pow (+ u1 (/ (/ (var-get interest) u10000) u1)) (* u1 time-difference-in-years)))

    (interest-factor (* time-difference-in-years (var-get interest))) ;; 10^8 scale factor because interest is 10^4 scale
    (interests (/ (* borrowed-amount interest-factor) u100000000)) ;; interest-only has a 10^2 scale factor
  )
    (print { borrowed-amount: borrowed-amount, borrowed-at: borrowed-at, current-block-height: current-block-height, time-difference-in-seconds: time-difference-in-seconds, time-difference-in-years: time-difference-in-years, interest-factor: interest-factor, interests: interests })
    interests ;; scale factor of 10^8 to have it in the unit of borrowed amounts
  )
)

(define-public (get-interests-in-public (borrowed-data (tuple (amount uint) (b-height uint))))
  (let (
    (borrowed-amount (get amount borrowed-data))
    (borrowed-at (get b-height borrowed-data))
    (current-block-height block-height)
    ;; (current-block-height u500) ;; for testing purposes
    (time-difference-in-seconds (* (- current-block-height borrowed-at) seconds-per-block))
    (time-difference-in-years  (/ (* time-difference-in-seconds u10000) seconds-per-year)) ;; 10^4 scale factor 1
    ;; (compound-factor (pow (+ u1 (/ (/ (var-get interest) u10000) u1)) (* u1 time-difference-in-years)))

    (interest-factor (* time-difference-in-years (var-get interest))) ;; 10^8 scale factor because interest is 10^4 scale
    (interests (/ (* borrowed-amount interest-factor) u100000000)) ;; interest is in base unit
    ;; if borrowed amount in sats then we divide by 10^8 like above


  )
    (print { borrowed-amount: borrowed-amount, borrowed-at: borrowed-at, current-block-height: current-block-height, time-difference-in-seconds: time-difference-in-seconds, time-difference-in-years: time-difference-in-years, interest-factor: interest-factor, interests: interests })
    (ok interests) ;; scale factor of 10^8 to have it in the unit of borrowed amounts
  )
)

;; Function to calculate total interest owed on all borrowing amounts
(define-public (get-total-interests (loan-id uint))
  (let
    (
      (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
      (current-interest-adjust (get interest-adjust loan))
      (current-borrowed-amounts (get borrowed-amounts loan))
      (list-of-interests (map get-interests current-borrowed-amounts) )
      (cumulative-interests (fold + list-of-interests u0))
      (total-interests (+ cumulative-interests (get interest-adjust loan)))
    )
    (print { list-of-interests: list-of-interests, cumulative-interests: cumulative-interests, total-interests: total-interests })
    (ok total-interests)
  )
)


;; Function that takes (tuple (amount uint) (b-height uint)) in and spits out the amount
(define-private (get-amount (input-tuple {amount: uint, b-height: uint})) ;; this is needed in mapping
  (get amount input-tuple)
)

;; Function to calculate total principal borrowed on all borrowing amounts
(define-read-only (get-total-principal (loan-id uint))
  (let
    (
    (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
    (borrowed-amounts (get borrowed-amounts loan))  ;; this includes the b-heights
    (borrowed-amounts-only (map get-amount borrowed-amounts))
    (total-borrowed (fold + borrowed-amounts-only u0))
    )
    (ok total-borrowed)
  )
)

(define-read-only (get-present-value-loan (loan-id uint))
  (let
    (
    (total-principal (unwrap! (get-total-principal loan-id) err-cant-unwrap))
    (total-interests (unwrap! (get-total-interests loan-id) err-cant-unwrap))
    (present-value (+ total-principal total-interests))
    )
  (ok present-value)
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
;; Let's have btc-deposit in satoshis when we call setup-loan
(define-public (setup-loan (btc-deposit uint) (attestor-ids (buff 32)))
    (let
      (
        (liquidation-ratio (var-get liquidation_ratio))
        (liquidation-fee (var-get liquidation_fee))
        (loan-id (+ (var-get last-loan-id) u1))
        (target sample-protocol-contract)
        (current-loan-ids (get-creator-loan-ids tx-sender))
          ;; Call to create-dlc returns the list of attestors, as well as the uuid of the dlc
        ;; (create-return (unwrap-panic (unwrap! (ok (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dlc-manager-v1 create-dlc target (var-get protocol-wallet-address) attestor-ids)) err-contract-call-failed))) ;; testing we don't need this Rafa
        ;; (attestors (get attestors create-return)) ;; testing we don't need this Rafa
        ;; (uuid (get uuid create-return)) ;; testing we don't need this Rafa
      )
      (var-set last-loan-id loan-id)
      (begin
          (map-set loans loan-id {
            ;; dlc_uuid: (some uuid), ;; testing we don't need this Rafa
            dlc_uuid: none, ;; testing we don't need this Rafa
            status: status-ready,
            vault-collateral: btc-deposit,
            liquidation-ratio: liquidation-ratio,
            liquidation-fee: liquidation-fee,
            owner: tx-sender,
            ;; attestors: attestors, ;; testing we don't need this Rafa
            attestors: (list ), ;; testing we don't need this Rafa
            btc-tx-id: none,
            borrowed-amounts: list-borrowed-empty,
            interest-adjust: u0
          })
          (try! (set-status loan-id status-ready)) ;; this is useless
          (map-set creator-loan-ids tx-sender (unwrap-panic (as-max-len? (append current-loan-ids loan-id) u50)))
          ;; (map-set uuid-loan-id uuid loan-id) ;; testing we don't need this Rafa
          ;; (ok uuid) ;; testing we don't need this Rafa
          (ok loan-id)
      )
    )
)


;; @desc Externally set a given DLCs status to funded.
;; Called by the dlc-manager contract after the necessary BTC events have happened.
(define-public (set-status-funded (uuid (buff 32))) ;; Anyone can call set-status and  set-status-funded - probably not a good thing Rafa
  (let (
    (loan-id (unwrap! (get-loan-id-by-uuid uuid ) err-cant-get-loan-id-by-uuid ))
    (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
    )
    ;; assert that only the dlc-manager-contract can call this function
    ;; (asserts! (is-eq dlc-manager-contract tx-sender) err-unauthorised) ;; add this back after testing Rafa
    (asserts! (not (is-eq (get status loan) status-funded)) err-dlc-already-funded)
    (begin
      (try! (set-status loan-id status-funded))
    )
    (ok true)
  )
)

;; amount has 6 decimals e.g. $100 = u100000000
(define-public (borrow (loan-id uint) (amount uint))
  (let
    (
        (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract)) ;; get the loan
        (present-value (unwrap! (get-present-value-loan loan-id) err-cant-unwrap))
        (present-borrow (+ present-value amount))
        ;; get liquidation ratio from loan
        (liquidation-ratio (get liquidation-ratio loan))
        ;; get vault-collateral from loan
        (vault-collateral (get vault-collateral loan)) ;; testing we don't need this Rafa
        ;; get liquidation level
        (liquidation-level (* (/ vault-collateral liquidation-ratio) u100))
    )
        (asserts! (is-eq (get owner loan) tx-sender) err-unauthorised)
        ;; (asserts! (is-eq (get status loan) status-funded) err-dlc-not-funded) ;; testing we don't need this Rafa ;; we can only borrow when it's in status-funded
        ;; they cannot borrow if vault-collateral =< Liquidation ratio * present-value
        (print { vault-collateral: vault-collateral, liquidation-ratio: liquidation-ratio, present-value: present-value, present-borrow: present-borrow, indicator: (/ (* liquidation-ratio present-borrow) u100) })
        (asserts! (< present-borrow liquidation-level) err-cannot-borrow-liquidation-ratio) ;; this is right now, you can't borrow if vault-collateral >= liquidation-ratio * present-borrow
        ;; let's print it here: vault collateral and present-borrow and present borrow times liquidation-ratio/100
        (print { vault-collateral: vault-collateral, present-borrow: present-borrow, indicator: (/ (* liquidation-ratio present-borrow) u100) })

        (unwrap! (record-borrowed-amount loan-id amount) err-cant-record-ba);; record the borrowed amount and block height
        (unwrap! (ok (as-contract (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.asset transfer amount sample-protocol-contract (get owner loan) none))) err-transfer-sbtc) ;; send the txsender their borrowed sbtc
        ;; (ok {lration: liquidation-ratio, p-value: present-value, v-collateral: vault-collateral, liquidation-value: (* liquidation-ratio present-value)})
        ;; (ok true)
    )
)

;; @desc An example function for closing the loan and initiating the closing of a DLC.
(define-public (close-loan (loan-id uint))
  (let (
    (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
    ;; get borrowed-amounts
    (borrowed-amounts (get borrowed-amounts loan))
    ;; (uuid (unwrap! (get dlc_uuid loan) err-cant-unwrap)) ;; unnecssary for testing Rafa
    )
    (begin
      ;; assert that only tx-sender can close the loan
      (asserts! (is-eq (get owner loan) tx-sender) err-unauthorised)
      ;; here we need to asserts that borrowed-amounts is equal to list-borrowed-empty
      (asserts! (is-eq borrowed-amounts list-borrowed-empty) err-not-repaid)
      (try! (set-status loan-id status-pre-repaid))
      ;; (unwrap! (ok (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dlc-manager-v1 close-dlc uuid u0)) err-contract-call-failed) ;; u0 ~ user gets their Bitcoins back (no liquidation event) ;; unnecessary for testing Rafa
      (ok true) ;; unnecessary for testing Rafa
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
                    (ok status-liquidated) ;; they didn't repay, so it's the liquidation event here
            ) err-cant-unwrap)
    ))
    (begin
      ;; assert that only the dlc-manager-contract can call this function
      ;; (asserts! (is-eq dlc-manager-contract tx-sender) err-unauthorised) ;; add this back after testing Rafa
      (map-set loans loan-id (merge loan { btc-tx-id: (some btc-tx-id) })) ;; there is a new btc transaction here recorded (the initial is not preserved? Rafa question here)
      (try! (set-status loan-id newstatus)) ;; okay
    )
    (ok true)
  )
)

;; @desc Liquidates loan if necessary at given level
;; Anyone can liquidate if the loan is underwater
;; The loan is underwater when the vault-collateral =< (present-value-loan * liquidation-ratio)
(define-public (attempt-liquidate (loan-id uint))
  (let
      (
        (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
        ;; get vault-collateral from loan
        (vault-collateral (get vault-collateral loan))
        ;; get liquidation ratio from loan
        (liquidation-ratio (get liquidation-ratio loan))
        ;; get the liquidation-fee
        (liquidation-fee (get liquidation-fee loan)) ;; this is a percentage of the amount at stake of liquidation

        (present-value (unwrap! (get-present-value-loan loan-id) err-present-value-loan))

        (liquidator tx-sender)
      )
        ;; we need some assertions here for when the loan is already liquidated or in status that should error out

        ;; the difference between vault-collateral and present-value-loan is at stake
        ;; the protocol will sell the difference to liquidators
      (if (>= vault-collateral present-value)
        (begin ;; the loan is not underwater
            ;; assert that liquidation-amount is positive
            (asserts! (<= vault-collateral (/ (* present-value liquidation-ratio) u100)) err-doesnt-need-liquidation) ;; LR = u105% = Collat / PV
            ;; pay the liquidator the liquidation-amount before the protocol receives the collateral-vault from bitcoin to sBTC?
            (print { liquidator: tx-sender })
            ;; if the protocol's 25% margin doesn't make up for the operations, the protocol loses money
            ;; we need to assert that (* (- vault-collateral present-value) (- 1 liquidation-fee)) is > a constant here Rafa
            ;; and if it's not then liquidator gets 0 from liquidation and the protocol gets 100%
            (asserts! (<= liquidation-fee u100) err-liquidation-fee-too-high)
              (if (> (/ (* (- vault-collateral present-value) (- u100 liquidation-fee)) u100) (var-get minimum-liquidation-amount))
                  (begin
                    (try! (as-contract (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.asset transfer (/ (* (- vault-collateral present-value) liquidation-fee) u100) sample-protocol-contract liquidator none)));; liquidation-fee should be renamed to liquidation-fee-percentage
                    (unwrap! (liquidate-loan loan-id) err-cant-unwrap-liquidate-loan)
                    ;; This is a healthy liquidation, the user owes nothing, and his loan is closed
                    ;; do we want to wipe out the loan here? Rafa
                    (ok true)
                  )
                  (begin
                  (unwrap! (liquidate-loan loan-id) err-cant-unwrap-liquidate-loan) ;; liquidator gets 0 and protocol gets 100%
                  ;; This is an unhealthy liquidation, the protocol has to disburse some fees to liquidate the loan
                  ;; do we want to flag the user here or wipe out the user's loan? Rafa
                  (ok false)
                  )
              )
        )
        (begin ;; the loan is underwater
            (emergency-liquidate loan-id) ;; the borrower isn't incentivize to repay if the loan is under water
            ;; we could use liquidate-loan directly here...
            ;; no one will lend the protocol if this branch happens, hence having a liquidation-ratio conservative and [a liquidation-fee, minimum-liquidation-amount] juicy enough
        )
      )
  )
)
;; 1 BTC ~ 10^8 ~ 100 000 000
;; deposit in sats so we need to divide it by 10^8 to get Bitcoin amount
;; price is per bitcoin?

;; @desc An example function to initiate the liquidation of a DLC loan contract.
;; If liquidation is required, this function will initiate a simple close-dlc flow with the calculated payout-ratio
(define-private (liquidate-loan (loan-id uint))
  (let (
    (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
    ;; (uuid (unwrap! (get dlc_uuid loan) err-cant-unwrap)) ;; reestablish after testing Rafa
    )
    (begin
      (try! (set-status loan-id status-pre-liquidated))
      ;; (unwrap! (ok (as-contract (contract-call? 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dlc-manager-v1 close-dlc uuid u10000))) err-contract-call-failed) ;; reestablish after testing Rafa
      (ok true) ;; delete after testing Rafa
    )
  )
)

(define-public (emergency-liquidate (loan-id uint))
  (let
      (
        (loan (unwrap! (get-loan loan-id) err-unknown-loan-contract))
        (vault-collateral (get vault-collateral loan))
        (present-value (unwrap! (get-present-value-loan loan-id) err-present-value-loan))
      )
      ;; if present value loan is greater than vault-collateral, then emergency liquidation is possible
      (asserts! (<= vault-collateral present-value) err-doesnt-need-liquidation)
      (print { liquidator: tx-sender, type: "emergency-liquidation" })

      (unwrap! (liquidate-loan loan-id) err-cant-unwrap-liquidate-loan)
      (ok true)
  )
)
;; do not allow loan-setup if user has a loan under water
