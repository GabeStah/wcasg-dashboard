#!/bin/sh

# Run migrations, update caches, and restart nginx/php
ssh -o StrictHostKeyChecking=no ubuntu@"${DEPLOY_ENDPOINT}" << EOF
  cd ${TARGET_DIRECTORY}
  php artisan migrate
  php artisan config:cache
  php artisan view:clear
  sudo systemctl restart nginx
  sudo systemctl restart php7.2-fpm
EOF
