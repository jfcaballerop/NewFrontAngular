#!/bin/bash
TAG="myteseo:prod"
DIR=/opt/teseo-front
# Se ejecuta el script drop.sh que borra las imagenes (docker rmi myteseo:prod --force)
./drop.sh

# Poner en el directorio
cd $DIR
# Hacer un pull
git pull

# Construir el docker
echo -e "\n ##" $TAG "Building ..." 
docker build -f Dockerfile-prod -t $TAG .
# Arrancar el docker
echo -e "\n ##" $TAG "Starting ..." 
docker run -d -it -p 80:80 -p 443:443 --rm $TAG