#!/bin/sh

# Updated project file permissions due to running in non-user directory
# source: https://github.com/marounmelhem/laravel-permissions-fix/blob/dev/perm_fix.sh
ssh -o StrictHostKeyChecking=no ubuntu@"${DEPLOY_ENDPOINT}" << EOF
  LARAVEL_OWNER=ubuntu
  LARAVEL_WS_GROUP=www-data
  LARAVEL_ROOT=${TARGET_DIRECTORY}

  sudo usermod -a -G "\${LARAVEL_WS_GROUP}" "\${LARAVEL_OWNER}"

  sudo chown -R "\${LARAVEL_OWNER}:\${LARAVEL_WS_GROUP}" "\${LARAVEL_ROOT}"

  sudo find "\${LARAVEL_ROOT}" -type f -exec chmod 644 {} \;

  sudo find "\${LARAVEL_ROOT}" -type d -exec chmod 755 {} \;

  sudo chgrp -R "\${LARAVEL_WS_GROUP}" "\${LARAVEL_ROOT}/storage" "\${LARAVEL_ROOT}/bootstrap/cache"

  sudo chmod -R ug+rwx "\${LARAVEL_ROOT}/storage" "\${LARAVEL_ROOT}/bootstrap/cache"
EOF