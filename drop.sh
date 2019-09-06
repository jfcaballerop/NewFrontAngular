#!/bin/bash

TAG="myteseo:prod"

DOCKERID=`docker ps -f ancestor=${TAG} | grep -w ${TAG} | cut -d' ' -f1`
if [ -z "$DOCKERID" ]
then
    echo "\$TAG is empty"
else
    echo "\$DOCKERID is NOT empty"
    echo $TAG "Stopping ..." 
    docker stop $DOCKERID
fi

echo $TAG "Remove ..." 
docker rmi $TAG --force