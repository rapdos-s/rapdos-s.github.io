#!/bin/bash

docker stop $(docker ps -aq) 1>/dev/null 2>/dev/null || true
docker system prune --all --force --volumes 1>/dev/null 2>/dev/null || true
