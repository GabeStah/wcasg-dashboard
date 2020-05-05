#!/bin/sh

# Reset and reseed database
ssh -o StrictHostKeyChecking=no ubuntu@"${DEPLOY_ENDPOINT}" << EOF
  cd ${TARGET_DIRECTORY}
  echo "Resetting database"
  yarn run db:reset
EOF
