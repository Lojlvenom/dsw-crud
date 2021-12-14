FROM node:14.15.5-buster-slim as build

# RUN apk add --no-cache bash

WORKDIR /home/node/app

# Copia os arquivos para o container
COPY ./ /home/node/app

# Instala as dependências
RUN npm install

# Constrói a aplicação
RUN npm run build

# Image for server
FROM nginx:1.17.10-alpine

COPY --from=build /home/node/app/dist/frontend /usr/share/nginx/html

EXPOSE 4200:80
