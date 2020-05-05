#!/bin/sh

# Update repo to build-flag, pull, install, and build app.
# Clear caches and update config cache.
ssh -o StrictHostKeyChecking=no ubuntu@"${DEPLOY_ENDPOINT}" << EOF
  cd ${TARGET_DIRECTORY}
  git remote set-url origin ${REPOSITORY_URL}
  git pull origin ${CI_COMMIT_REF_NAME}
  git checkout ${CI_COMMIT_REF_NAME}
  composer install
  yarn install
  npm rebuild
  yarn run production
EOF
