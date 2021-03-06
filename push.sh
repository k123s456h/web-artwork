#!/bin/bash

MESSAGE_ARRAY=("8^8" ">_<" "*^*" "T^T" "OwO" "*3*" "๐ค" "๐คจ" "โ" "โ" "โ๏ธ" "X_X" "๊๊(แตแแต*)")
LENGTH=13
INDEX="$RANDOM % $LENGTH"
COMMIT_MESSAGE=$1

if [ -z "$COMMIT_MESSAGE" ]
then
  COMMIT_MESSAGE=${MESSAGE_ARRAY[$INDEX]}
fi

# echo "$COMMIT_MESSAGE"

git config --global credential.helper store
git add .
git commit -m "$COMMIT_MESSAGE"
git push