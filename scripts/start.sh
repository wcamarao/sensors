#!/bin/bash
set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && cd .. && pwd )"

cd $DIR

P1="cd $DIR/api && npm start"
P2="cd $DIR/web && wait-on tcp:8080 && npm start"

concurrently -c "magenta" -n "api,web" "$P1" "$P2"
