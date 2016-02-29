#! /bin/bash

node_modules/.bin/tape ./$1/js/test.js | node_modules/.bin/tap-spec
