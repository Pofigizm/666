#!/bin/bash

REPO="pfgzm"

# check this docker console
docker info || exit 1;

cp docker/start.sh build/;

# check anonym/mongodb exist
docker images | grep $REPO/mongodb;
if [ $? -ne 0 ]; then
  ( cd docker && cd mongodb && docker build -t anonym/mongodb . ) || exit 1;
fi

# check anonym/dependensy exist
docker images | grep $REPO/dependensy;
if [ $? -ne 0 ]; then
  mkdir docker/dependensy/data
  cp build/package.json docker/dependensy/data/package.json;
  ( cd docker && cd dependensy && docker build -t $REPO/dependensy . ) || exit 1;
fi

# check anonym/dependensy need update
DIFF=$( diff build/package.json docker/dependensy/data/package.json );
if [ "$DIFF" != "" ]; then
  mkdir docker/dependensy/data
  cp build/package.json docker/dependensy/data/package.json;
  ( cd docker && cd dependensy && docker build -t $REPO/dependensy . ) || exit 1;
fi

# build main container
cp docker/Dockerfile ./;
docker build -t $REPO/main .;
rm Dockerfile;

