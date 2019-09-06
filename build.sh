#!/bin/bash
TAG="myteseo:prod"

# Se ejecuta el script drop.sh que borra las imagenes (docker rmi myteseo:prod --force)
./drop.sh

# Poner en el directorio
# cd /opt/teseo-front
# Hacer un pull
# git pull

# Construir el docker
echo $TAG "Building ..." 
docker build -f Dockerfile-prod -t $TAG .
# Arrancar el docker
echo $TAG "Starting ..." 
docker run -d -it -p 80:80 -p 443:443 --rm $TAG