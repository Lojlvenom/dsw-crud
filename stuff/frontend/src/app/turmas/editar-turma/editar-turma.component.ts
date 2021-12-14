import { TurmaCreateInterface, TurmaInterface, TurmaUpdateInterface } from './../../shared/interfaces/turma.interface';
import { Component, OnInit } from '@angular/core';
import { TurmaService } from 'src/app/shared/services/turma.service';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { CursoFicService } from 'src/app/shared/services/cursofic.service';
import { ProfessorService } from 'src/app/shared/services/professor.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-turma',
  templateUrl: './editar-turma.component.html',
  styleUrls: ['./editar-turma.component.css']
})
export class EditarTurmaComponent implements OnInit {
  turma: any;
  professorControl = new FormControl();
  cursoControl = new FormControl();
  professores: any;
  cursos: any;
  professorId: string = "";
  cursoId: string = "";
  turmaEditada = true;
  nome: string;

  turmaID: number;
  nomeDaTurma: string;
  nomeProfessor: string;
  nomeCurso: string;
  inicio: string;
  fim: string;

  listTurma: TurmaInterface[] = [];
  displayedColumns: string[] = ['id', 'name', 'course', 'startDate', 'endDate', 'actions'];

  constructor(
    private turmaService: TurmaService,
    private cursoService: CursoFicService,
    private professorService: ProfessorService,
    private snackBar: MatSnackBar,
    private modalService: NgbModal,
    private config: NgbModalConfig,
    private router: Router
  ) {
    this.config.backdrop = 'static';
    this.config.keyboard = false;
  }

  ngOnInit() {
    let _id:any = localStorage.getItem('turma');
    this.turmaService.listarTurmaPorId(_id).subscribe((res => {
      this.turma = res;
      this.turmaID = this.turma.ID;
      this.nomeDaTurma = this.turma.nome;
      this.nomeProfessor = this.turma.professor[0]['nome'];
      this.nomeCurso = this.turma.curso[0]['nome'];
      this.inicio = this.transformDate(this.turma.dataInicio);
      this.fim = this.transformDate(this.turma.dataFim);
    }));
  }

  setProfessor(_id:string){
    this.professorId = _id;
  }

  setCurso(_id:string){
    this.cursoId = _id;
  }

  atualizarTurma(nome:string, dataInicio:string, dataFim:string){
    const dadosTurma: any  = {
      _id: this.turma._id,
      nome: nome,
      professorId: this.professorId==""?this.turma.professorId:this.professorId,
      cursoId: this.cursoId==""?this.turma.cursoId:this.cursoId,
      dataInicio: dataInicio,
      dataFim: dataFim
    };
    console.log(dadosTurma);
    let validacao = this.validarTurma(dadosTurma);

    if (validacao){
      dadosTurma.dataInicio = new Date(dataInicio).toISOString();
      dadosTurma.dataFim = new Date(dataFim).toISOString();
      this.turmaService.atualizarTurma(dadosTurma).subscribe((res => {
        this.turma = res;
        this.listarTurmaPorId(this.turma._id);
        console.log(this.turma);
      }));
    }
  }

  buscarProfessorPorNome(value:string){
    let professores = this.professorService.listarProfessoresPorNome(value);
    this.professores = this.cursoControl.valueChanges
        .pipe(
          startWith(''),
          map(value => professores),
        );
    console.log(professores);
  }


  buscarCursoPorNome(value:string){
    this.cursoService.listarCursosPorNomeID(value).subscribe((res =>{
      console.log(res);
      this.cursos = this.cursoControl.valueChanges
          .pipe(
            startWith(''),
            map(value => res),
          );
    }));
  }

  validarTurma(turma:TurmaCreateInterface){
    const isEmpty = Object.values(turma).some(x => (x === null));
    if (isEmpty){
      this.snackBar.open("Preencha todos os dados!", "Fechar", {
        verticalPosition: 'top'
      });
      return false
    }
    return true;
  }

  listarTurmaPorId(_id:string){
    this.turmaService.listarTurmaPorId(_id).subscribe((res => {
      this.turma = res;
      this.listTurma = [ this.turma ];
      this.turmaEditada = false;
    }));
  }

  verTurma(value:string){
    localStorage.setItem('turma_id', value)
    this.router.navigate([{outlets: {turma: 'ver-turma'}}])
    console.log(value);
  }

  deletarTurma(){
    console.log(this.turma);
    this.turmaService.deletarTurma(this.turma._id).then((res => {
      this.turmaEditada = true;
    }));
  }

  openVerticallyCentered(content:any) {
    this.modalService.open(content, { centered: true});
  }

  transformDate(value:any){
    let data = value.split('T')
    return data[0];
  }
}
