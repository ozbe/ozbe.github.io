#!/bin/bash

docker run --rm -it \
-p 9000:9000 -p 8000:8000 \
-e GATSBY_TELEMETRY_DISABLED=1 \
-v `pwd`:/site \
-v ~/.gitconfig:/root/.gitconfig \
-v ~/.vimrc:/root/.vimrc \
ozbe/gatsby
