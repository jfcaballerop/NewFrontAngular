#!/bin/bash

TAG="myteseo:prod"

DOCKERID=`docker ps -f ancestor=${TAG} | grep -w ${TAG} | cut -d' ' -f1`
if [ -z "$DOCKERID" ]
then
    echo -e "\n ## \$TAG is empty"
else
    echo -e "\n ## \$DOCKERID is NOT empty"
    echo -e "\n ##" $TAG "Stopping ..." 
    docker stop $DOCKERID
fi

echo -e "\n ##" $TAG "Remove ..." 
docker rmi $TAG --force