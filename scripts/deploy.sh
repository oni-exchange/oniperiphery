#!/bin/bash

if [ -z $1 ]; then
  node -r dotenv/config ./node_modules/.bin/truffle migrate --network bsc --reset # option key for force re-deploy contracts
else
  node -r dotenv/config ./node_modules/.bin/truffle migrate --network $1 --skip-dry-run --reset # option key for force re-deploy contracts
fi
