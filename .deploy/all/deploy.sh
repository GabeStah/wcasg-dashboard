#!/bin/sh

# Run migrations, update caches, and restart nginx/php
ssh -o StrictHostKeyChecking=no ubuntu@"${DEPLOY_ENDPOINT}" << EOF
  cd ${TARGET_DIRECTORY}
  php artisan migrate --force
  php artisan config:cache
  php artisan view:clear
  php artisan storage:link
  pm2 del all
  pm2 start "php artisan queue:work"
  pm2 start "php artisan queue:work:sqs"
  sudo systemctl restart nginx
  sudo systemctl restart php7.2-fpm
EOF
