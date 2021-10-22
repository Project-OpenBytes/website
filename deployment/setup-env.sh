#! /bin/bash

echo "setup env for env:$1 subenv:$2"
target=./deployment/envs/env.${2}.${1}
echo "current env variables"
cat ${target}
cp ${target} .env
