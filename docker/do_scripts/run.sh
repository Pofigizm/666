#!/bin/bash

REPO="pfgzm"

sh stop.sh;

docker run -id \
  -p 80:80 \
  -p 8080:8080 \
  -v ~/data/db:/data/db \
  -v ~/data/logs:/data/logs \
  -t $REPO/main;

