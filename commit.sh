#!/bin/bash

MESSAGE=$1

git add --all :/
git commit -m "$1"
git push
