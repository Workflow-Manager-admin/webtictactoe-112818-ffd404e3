#!/bin/bash
cd /home/kavia/workspace/code-generation/webtictactoe-112818-ffd404e3/web_tic_tac_toe
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

