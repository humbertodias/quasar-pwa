#!/bin/bash
change_app_version(){
  BRANCH=`git rev-parse --abbrev-ref HEAD`
  REV=`git rev-parse --short HEAD`
  jq ".version=\"$BRANCH:$REV\"" package.json > /tmp/package.json
  mv /tmp/package.json package.json
}

build_push_gh_pages(){
  npm i
  quasar build -m pwa
  TMP_DIR="/tmp/pwa-$(date +'%Y_%m_%d %H:%M:%S')"
  cp -r dist/pwa "$TMP_DIR" && \
  git reset HEAD --hard && \
  git checkout gh-pages && \
  rm -rf * && \
  cp -r "$TMP_DIR"/* . && \
  git add . && \
  git commit . -m "gh-pages.sh" && \
  git push
}

OLD_BRANCH=`git rev-parse --abbrev-ref HEAD`

change_app_version
build_push_gh_pages

git checkout "$OLD_BRANCH"