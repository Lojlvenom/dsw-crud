import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { element } from 'protractor';
import { AlunoService } from 'src/app/shared/services/aluno.service';
import { TurmaInterface } from './../../shared/interfaces/turma.interface';
import { TurmaService } from 'src/app/shared/services/turma.service';
import { Component, OnInit } from '@angular/core';
import { catchError, map, startWith, timeout } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ver-turma',
  templateUrl: './ver-turma.component.html',
  styleUrls: ['./ver-turma.component.css']
})
export class VerTurmaComponent implements OnInit {
  turmaId: number;
  professor: string;
  curso: string;
  nomeTurma: string;
  listaDeAlunos: any;
  buscaAlunos: any;
  alunoMatricularId: string;
  alunoRemover = {
    _id: "",
    nome: "",
    matricula:""
  };
  alunosLista: any;
  alunoControl = new FormControl();
  turma: TurmaInterface;
  displayedColumns: string[] = ['matricula', 'nome', 'actions'];

  constructor(
    private turmaService: TurmaService,
    private alunoService: AlunoService,
    private modalService: NgbModal,
    private snackBar: MatSnackBar,
    private config: NgbModalConfig,
    private router: Router
  ) {
    this.config.backdrop = 'static';
    this.config.keyboard = false;
   }

  ngOnInit() {
    let _id:any = localStorage.getItem('turma_id');
    this.listarTurmaPorId(_id);
  }

  listarTurmaPorId(_id:string){
    this.turmaService.listarTurmaPorId(_id).subscribe((res: TurmaInterface) => {
      this.turma = res;
      this.turmaId = res.ID;
      this.nomeTurma = res.nome;
      this.professor = res.professor[0]['nome'];
      this.curso = res.curso[0]['nome'];
      this.listaDeAlunos = res.alunos;
      console.log(res);
    },  catchError((err: any) => {
      return throwError(err.status);
    }));
  }

  removerAluno(){
    let array = this.turma.alunosId;
    let turmaAtualizar: TurmaInterface;
    array.forEach((element, index) => {
      if (element == this.alunoRemover._id) array.splice(index, 1);
    });
    turmaAtualizar = this.turma;
    turmaAtualizar.alunosId = array;

    this.turmaService.atualizarTurma(turmaAtualizar).subscribe((res => {
      this.turma = res;
      this.turmaId = res.ID;
      this.nomeTurma = res.nome;
      this.professor = res.professor[0]['nome'];
      this.curso = res.curso[0]['nome'];
      this.listaDeAlunos = res.alunos;
      console.log(res);
    }))
  }

  openVerticallyCentered(content:any, element:any) {
    this.alunoRemover._id = element._id;
    this.alunoRemover.matricula = element.matricula;
    this.alunoRemover.nome = element.nome;
    this.modalService.open(content, { centered: true});
  }

  buscarAlunoPorNome(value:string){
    var alunos = this.alunoService.listarAlunosPorNome(value);
    this.buscaAlunos = this.alunoControl.valueChanges
        .pipe(
          startWith(''),
          map(value => alunos),
        );
    console.log(alunos);
  }

  setAluno(alunoId:string){
    console.log(alunoId);
    this.alunoMatricularId = alunoId;
  }

  matricularAluno(){
    if (this.alunoMatricularId=="" || this.alunoMatricularId == null){
      this.snackBar.open("Escolha um aluno para matricular!", "Fechar", {
        verticalPosition: 'top'
      });
      this.resetAutoComplete();
    } else if(this.turma.alunosId.includes(this.alunoMatricularId)){
      this.snackBar.open("Aluno já está matriculado na turma!", "Fechar", {
        verticalPosition: 'top'
      });
      this.resetAutoComplete();
    } else {
      this.turma.alunosId.push(this.alunoMatricularId);
      console.log(this.alunoMatricularId);
      this.turmaService.atualizarTurma(this.turma).subscribe((res => {
        this.turma = res;
        this.turmaId = res.ID;
        this.nomeTurma = res.nome;
        this.professor = res.professor[0]['nome'];
        this.curso = res.curso[0]['nome'];
        this.listaDeAlunos = res.alunos;
        console.log(res);
      }))
      this.resetAutoComplete();
    }
  }

  resetAutoComplete(){
    this.buscaAlunos = this.alunoControl.valueChanges
        .pipe(
          startWith(''),
          map(value => []),
        );
  }
}
