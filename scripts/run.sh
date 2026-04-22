#!/bin/bash

# script directory
SCRIPT_DIR=$(dirname "$(realpath "$0")")

echo "[$0] Docker composing up..."
docker compose -f $SCRIPT_DIR/docker-compose.yml up

echo "[$0] Docker composing down..."
docker compose -f $SCRIPT_DIR/docker-compose.yml down
