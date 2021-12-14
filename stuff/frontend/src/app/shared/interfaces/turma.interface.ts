export interface TurmaInterface {
  _id:string,
  ID:number,
  nome:string,
  professorId:string,
  cursoId:string,
  alunosId:string[],
  dataInicio:string,
  dataFim:string,
  professor:any[],
  curso:any[],
  alunos:any[],
}

export interface TurmaCreateInterface {
  nome:string,
  professorId:string,
  cursoId:string,
  dataInicio:string,
  dataFim:string,
}

export interface TurmaUpdateInterface {
  nome:string,
  professorId:string,
  cursoId:string,
  alunosId:[],
  dataInicio:string,
  dataFim:string,
}
