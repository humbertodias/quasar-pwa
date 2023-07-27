#!/bin/bash

change_app_version(){
  BRANCH=`git rev-parse --abbrev-ref HEAD`
  REV=`git rev-parse --short HEAD`
  jq ".version=\"$BRANCH:$REV\"" package.json > /tmp/package.json && \
  mv /tmp/package.json package.json
}

QENV="${1:-local}"
pwd && \
ls -lha && \
change_app_version && \
docker run -e QENV=$QENV -v $(pwd):/tmp/app hldtux/quasar-apk bash -c "cd /tmp/app/src-cordova/platforms/android; gradle build ; find . -name '*.apk'"
