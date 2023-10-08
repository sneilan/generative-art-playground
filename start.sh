#!/bin/bash

sass --watch test.sass:test.css &
ts-node server.ts &
