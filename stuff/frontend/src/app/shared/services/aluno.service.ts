import { Injectable } from '@angular/core';

const alunos = [
  {
    _id: "60d8ad29967c085268fb5186",
    nome: 'João Junior Siqueira',
    matricula: 2019001002,
    createdAt: "2021-06-11T00:04:01.665Z",
    updatedAt: "2021-06-11T00:04:01.665Z"
  },
  {
      _id: "60d8ad29967c085268fb5187",
      nome: 'Beatriz Souza Lima',
      matricula: 2019001445,
      createdAt: "2021-06-29T00:04:01.665Z",
      updatedAt: "2021-06-29T00:04:01.665Z"
  },
  {
      _id: "60d8ad29967c085268fb5188",
      nome: 'Carlos Alberto Silva',
      matricula: 2019001488,
      createdAt: "2021-06-29T00:04:01.665Z",
      updatedAt: "2021-06-29T00:04:01.665Z"
  },
  {
      _id: "60d8ad29967c085268fb5189",
      nome: 'Ana Aline Pinheiro',
      matricula: 2019001005,
      createdAt: "2021-06-29T00:04:01.665Z",
      updatedAt: "2021-06-29T00:04:01.665Z"
  },
  {
      _id: "60d8ad29967c085268fb5190",
      nome: 'Ronaldo Campos Barros',
      matricula: 2019099445,
      createdAt: "2021-06-29T00:04:01.665Z",
      updatedAt: "2021-06-29T00:04:01.665Z"
  },
  {
      _id: "60d8ad29967c085268fb5220",
      nome: 'Victoria Prado Barros',
      matricula: 2017019405,
      createdAt: "2021-06-29T00:04:01.665Z",
      updatedAt: "2021-06-29T00:04:01.665Z"
  },
  {
      _id: "60d8ad29967c085268fb5221",
      nome: 'Paulo Ferreira Lima',
      matricula: 2017015500,
      createdAt: "2021-06-29T00:04:01.665Z",
      updatedAt: "2021-06-29T00:04:01.665Z"
  },
  {
      _id: "60d8ad29967c085268fb5222",
      nome: 'Mayara Luisa de Lima',
      matricula: 2015919503,
      createdAt: "2021-06-29T00:04:01.665Z",
      updatedAt: "2021-06-29T00:04:01.665Z"
  }
];

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

constructor() { }

  listarAlunosPorNome(termo:string){
    let todosAlunos = [];
    for (let i = 0; i < alunos.length; i++){
      if(alunos[i].nome.toLowerCase().includes(termo)){
         todosAlunos.push(alunos[i]);
      } else if (alunos[i].nome.includes(termo) || alunos[i].matricula.toString().includes(termo)){
        todosAlunos.push(alunos[i]);
      }
    }
    return todosAlunos;
  }
}
