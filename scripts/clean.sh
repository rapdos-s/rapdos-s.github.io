#!/bin/bash

echo "[$0] Stopping docker containers..."
docker stop $(docker ps -aq) 1>/dev/null 2>/dev/null || true

echo "[$0] Pruning docker resources..."
docker system prune --all --force --volumes 1>/dev/null 2>/dev/null || true
