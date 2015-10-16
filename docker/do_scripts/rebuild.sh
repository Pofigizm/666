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
  || exit 1;

echo "-------------------- 5"
cp -r $DIR/src/docker/do_scripts/* .
cd $DIR/src && sh build_container.sh

echo "-------------------- 6"
sh run.sh

