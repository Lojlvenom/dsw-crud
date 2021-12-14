FROM node:16.10.0-buster-slim as build

# RUN apk add --no-cache bash
RUN npm install -g npm@6.14.11

RUN npm i -g @nestjs/cli

WORKDIR /home/node/app

# RUN apk add --no-cache bash

# Copia os arquivos para o container
COPY ./ /home/node/app

# Instala as dependências
RUN npm install && npm install --save @nestjs/mongoose mongoose

# Constrói a aplicação
RUN npm run build

# Start server
FROM node:slim
WORKDIR /home/node/app
COPY --from=build /home/node/app /home/node/app
EXPOSE 4040
CMD npm run start:prod
