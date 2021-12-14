#!/bin/bash

#docker-compose exec mongo /bin/bash
docker-compose exec database-crud /bin/bash -c \
    'exec mongo --port 27027 cruddb -u root -p example --authenticationDatabase admin'