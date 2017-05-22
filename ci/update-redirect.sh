#!/bin/bash
# ----------------------------------------------------------------------
# Numenta Platform for Intelligent Computing (NuPIC)
# Copyright (C) 2017, Numenta, Inc.  Unless you have purchased from
# Numenta, Inc. a separate commercial license for this software code, the
# following terms and conditions apply:
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero Public License version 3 as
# published by the Free Software Foundation.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
# See the GNU Affero Public License for more details.
#
# You should have received a copy of the GNU Affero Public License
# along with this program.  If not, see http://www.gnu.org/licenses.
#
# http://numenta.org/licenses/
# ----------------------------------------------------------------------

# This scripts create web page redirect links by using S3 redirect metadata
# property.
# See https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html

set -o errexit
set -o xtrace

while getopts "b:f:" opt; do
  case "$opt" in
    b) S3_BUCKET=$OPTARG;;
    f) CSV_FILE=$OPTARG;;
  esac
done

if [[ -z ${S3_BUCKET} || -z ${CSV_FILE} ]]; then
  echo "Usage $0 -b S3_BUCKET -f CSV_FILE"
  exit 1
fi

TMPFILE=`mktemp`
while IFS=',' read -r from_url to_url || [[ -n "$from_url" ]]; do
    aws s3 cp ${TMPFILE} s3://${S3_BUCKET}${from_url} --website-redirect ${to_url}
done < "$CSV_FILE"
rm ${TMPFILE}
