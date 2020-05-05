#!/bin/sh

ssh -o StrictHostKeyChecking=no ubuntu@"${DEPLOY_ENDPOINT}" << EOF
  echo "No tests performed."
EOF
