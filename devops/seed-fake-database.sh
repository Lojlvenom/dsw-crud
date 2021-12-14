#!/bin/bash
INIT="\e[01;33mPopulando as collections do MongoDB\e[00m 👀\n"
FINISH="\e[01;32mFake-database semeado com sucesso!\e[00m 😎"
COLLECTION_FINISH="\e[01;36mCollection populada:\e[00m"

echo -e "\n$INIT"

# Popula Alunos
docker-compose exec database-crud /bin/bash -c \
    'exec mongo --port 27027 cruddb -u root -p example --authenticationDatabase admin ../../database-scripts/fake-alunos.js'
echo -e "$COLLECTION_FINISH alunos ✅\n"

# Popula Professores
docker-compose exec database-crud /bin/bash -c \
    'exec mongo --port 27027 cruddb -u root -p example --authenticationDatabase admin ../../database-scripts/fake-professores.js'
echo -e "$COLLECTION_FINISH professors ✅\n"

# Popula CursoFics
docker-compose exec database-crud /bin/bash -c \
    'exec mongo --port 27027 cruddb -u root -p example --authenticationDatabase admin ../../database-scripts/fake-cursos-fic.js'
echo -e "$COLLECTION_FINISH cursoFics ✅\n"

# Popula Turma
docker-compose exec database-crud /bin/bash -c \
    'exec mongo --port 27027 cruddb -u root -p example --authenticationDatabase admin ../../database-scripts/fake-turmas.js'
echo -e "$COLLECTION_FINISH turmas ✅\n"

echo -e "$FINISH\n"