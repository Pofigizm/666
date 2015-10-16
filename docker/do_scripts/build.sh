#!/bin/bash

REPO="pfgzm"
DEFOLT="develop"
BRANCH=${1:-$DEFOLT}
DIR=${PWD}

echo "-------------------- 1"
echo "Local folder is $DIR"

echo "-------------------- 2"

echo "FROM ubuntu" > $DIR/Dockerfile
echo "RUN apt-get update" >> $DIR/Dockerfile
echo "RUN apt-get install -y nodejs nodejs-legacy npm git git-core python build-essential" >> $DIR/Dockerfile
echo "WORKDIR /src" >> $DIR/Dockerfile
echo "CMD (git clone -b $BRANCH https://github.com/Pofigizm/666.git . || git pull) && npm install -verbose && npm run build" >> $DIR/Dockerfile
cat $DIR/Dockerfile

echo "-------------------- 3"
docker build -t $REPO/build-$BRANCH . || exit 1
rm $DIR/Dockerfile

echo "-------------------- 4"
rm -r $DIR/src
mkdir $DIR/src
chmod 777 $DIR/src

docker run -i \
  -v $DIR/src:/src \
  -t $REPO/build-$BRANCH \
  || exit 1;

echo "-------------------- 5"
cp -r $DIR/src/docker/do_scripts/* .
cd $DIR/src && sh build_container.sh

echo "-------------------- 6"
sh run.sh

