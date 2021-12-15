export class DswStorage {
    static populateStorage(){
        localStorage.setItem('professor', '[{"nome":"Lucas Damasceno Silva","_id":1},{"nome":"João Lucas Campos","_id":2},{"nome":"Renato Souza Pinto","_id":3}]');
        localStorage.setItem('aluno', '[{"nome":"João Junior Siqueira","matricula":2019001002,"_id":1},{"nome":"Beatriz Souza Lima","matricula":2019001445,"_id":2},{"nome":"Carlos Alberto Silva","matricula":2019001488,"_id":3},{"nome":"Ana Aline Pinheiro","matricula":2019001005,"_id":4}]');
        localStorage.setItem('cursoFic', '[{"nome":"Desenvolvimento de Software Web","_id":1},{"nome":"Persistência Java com MySQL","_id":2},{"nome":"Docker e Docker Compose","_id":3},{"nome":"Programação de Sistemas Embaracados","_id":4}]')
        localStorage.setItem('turma', '[{"nome":"Tecnico Básico I","dataInicio":"2021-06-29T00:04:01.665Z","dataFim":"2021-10-29T00:04:01.665Z","cursoId":1,"professorId":2,"alunosId":[1,2],"_id":1},{"nome":"Técnico Avançado II","dataInicio":"2021-06-29T00:04:01.665Z","dataFim":"2021-10-29T00:04:01.665Z","cursoId":3,"professorId":3,"alunosId":[3,4],"_id":2}]')
    }
}