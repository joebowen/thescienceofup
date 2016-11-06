#!/usr/bin/env bash

gulp

aws s3 rm s3://www.scienceofup.org --recursive --region us-east-1

aws s3 sync web s3://www.scienceofup.org --region us-east-1
