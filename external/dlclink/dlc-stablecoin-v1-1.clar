;; dlc-stablecoin
;; (impl-trait 'SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard.sip-010-trait)
;; ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM
;; Testnet
(impl-trait 'ST1NXBK3K5YYMD6FD41MVNP3JS1GABZ8TRVX023PT.sip-010-trait-ft-standard.sip-010-trait)

(define-constant contract-owner tx-sender)
(define-constant err-owner-only (err u100))
(define-constant err-not-token-owner (err u101))

;; No maximum supply!
(define-fungible-token dlc-stablecoin)

(define-read-only (get-name)
    (ok "DLC Stable Coin")
)

(define-read-only (get-symbol)
    (ok "USDLC")
)

(define-read-only (get-decimals)
    (ok u6)
)

(define-read-only (get-total-supply)
    (ok (ft-get-supply dlc-stablecoin))
)

(define-read-only (get-token-uri)
    (ok none)
)

(define-read-only (get-balance (who principal))
    (ok (ft-get-balance dlc-stablecoin who))
)

(define-public (transfer (amount uint) (sender principal) (recipient principal) (memo (optional (buff 34))))
    (begin
        ;; (asserts! (is-eq tx-sender sender) err-not-token-owner) ;;Not to be used in production
        (try! (ft-transfer? dlc-stablecoin amount sender recipient))
        (match memo to-print (print to-print) 0x)
        (ok true)
    )
)

(define-public (mint (amount uint) (recipient principal))
    (begin
        ;; (asserts! (is-eq tx-sender contract-owner) err-owner-only) ;;Not to be used in production
        (ft-mint? dlc-stablecoin amount recipient)
    )
)

;; Burn method
(define-public (burn (amount uint) (account-to-burn-from principal))
  (begin
    ;; (asserts! (is-eq contract-caller contract-owner) err-owner-only) ;;Not to be used in production
    (ft-burn? dlc-stablecoin amount account-to-burn-from)
  )
)
