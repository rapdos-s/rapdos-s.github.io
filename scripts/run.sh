#!/bin/bash

# script directory
SCRIPT_DIR=$(dirname "$(realpath "$0")")

docker compose -f "$SCRIPT_DIR/docker-compose.yml" up
docker compose -f "$SCRIPT_DIR/docker-compose.yml" down
