#!/bin/bash

dir="$(dirname "$0")"

# Returns the default credentials for the devnet

mnemonic="twice kind fence tip hidden tilt action fragile skin nothing glory cousin green tomorrow spring wrist shed math olympic multiply hip blue scout claw"


# if running via devenv
#$dir/../sbtc/bin/sbtc generate-from -s testnet -b regtest --accounts 2 mnemonic "$mnemonic"
# if running as cargo install ... cargo install --path sbtc-cli
sbtc generate-from -s testnet -b regtest --accounts 2 mnemonic "$mnemonic"