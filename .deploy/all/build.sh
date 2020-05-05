#!/bin/sh

echo "Outer ENV_FILE_TESTING: ${ENV_FILE_TESTING}"
echo "Outer SSH_PRIVATE_KEY: ${SSH_PRIVATE_KEY}"
echo "Outer ENV_FILE: ${ENV_FILE}"

# Update repo to build-flag, pull, install, and build app.
ssh -o StrictHostKeyChecking=no ubuntu@"${DEPLOY_ENDPOINT}" << EOF
  echo "Inner SSH_PRIVATE_KEY: ${SSH_PRIVATE_KEY}"
  echo "Inner ENV_FILE: ${ENV_FILE}"
  echo "Inner SSH_PRIVATE_KEY escaped: \${SSH_PRIVATE_KEY}"
  echo "Inner ENV_FILE escaped: \${ENV_FILE}"
  cd ${TARGET_DIRECTORY}
  echo "Setting remote origin url to '${REPOSITORY_URL}'."
  git remote set-url origin ${REPOSITORY_URL}
  git stash
  echo "Pulling and checking out '${CI_COMMIT_REF_NAME}' branch."
  git pull origin ${CI_COMMIT_REF_NAME}
  git checkout ${CI_COMMIT_REF_NAME}
  echo "Copying from ${ENV_FILE} to .env."
  cp ${ENV_FILE} .env
  echo "Installing composer packages."
  composer install
  echo "Installing node modules."
  yarn install
  npm rebuild
  echo "Building app."
  yarn run ${CI_ENVIRONMENT_NAME}
EOF
