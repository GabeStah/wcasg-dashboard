#!/bin/sh

# Update repo to build-flag, pull, and checkout.
ssh -o StrictHostKeyChecking=no ubuntu@"${DEPLOY_ENDPOINT}" << EOF
  cd ${TARGET_DIRECTORY}
  echo "Setting remote origin url to '${REPOSITORY_URL}'."
  git remote set-url origin ${REPOSITORY_URL}
  git stash
  echo "Pulling and checking out '${CI_COMMIT_REF_NAME}' branch."
  git pull origin ${CI_COMMIT_REF_NAME}
  git checkout ${CI_COMMIT_REF_NAME}
EOF

# Transfer .env file
echo "Copying ${ENV_FILE} to .env."
scp -o StrictHostKeyChecking=no "${ENV_FILE}" "ubuntu@${DEPLOY_ENDPOINT}:${TARGET_DIRECTORY}/.env"

# Installing packages and building app.
ssh -o StrictHostKeyChecking=no ubuntu@"${DEPLOY_ENDPOINT}" << EOF
  cd ${TARGET_DIRECTORY}
  echo "Installing composer packages."
  composer install
  echo "Installing node modules."
  yarn install
  npm rebuild
  echo "Building app."
  yarn run ${CI_ENVIRONMENT_NAME}
EOF