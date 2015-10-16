#!/bin/bash

REPO="pfgzm"
DEFOLT="develop"
BRANCH=${1:-$DEFOLT}
DIR=${PWD}

echo "-------------------- 1"
echo "Local folder is $DIR"

echo "-------------------- 4"
docker run -i \
  -v $DIR/src:/src \
  -t $REPO/build-$BRANCH \
  bash || exit 1;

