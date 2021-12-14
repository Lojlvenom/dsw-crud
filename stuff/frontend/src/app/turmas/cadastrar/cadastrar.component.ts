import { TurmaCreateInterface, TurmaInterface } from './../../shared/interfaces/turma.interface';
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
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  turma: any;
  professorControl = new FormControl();
  cursoControl = new FormControl();
  professores: any;
  cursos: any;
  professorId: string = "";
  cursoId: string = "";
  novaTurma = true;
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
  }

  setProfessor(_id:string){
    this.professorId = _id;
  }

  setCurso(_id:string){
    this.cursoId = _id;
  }

  cadastrarTurma(nome:string, dataInicio:string, dataFim:string){
    const dadosTurma: TurmaCreateInterface  = {
      nome: nome,
      professorId: this.professorId,
      cursoId: this.cursoId,
      dataInicio: dataInicio,
      dataFim: dataFim
    };
    let validacao = this.validarTurma(dadosTurma);

    if (validacao){
      dadosTurma.dataInicio = new Date(dataInicio).toISOString();
      dadosTurma.dataFim = new Date(dataFim).toISOString();
      this.turmaService.criarTurma(dadosTurma).subscribe((res => {
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
    const isEmpty = Object.values(turma).some(x => (x === null || x === ''));
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
      this.novaTurma = false;
    }));
  }

  verTurma(value:string){
    localStorage.setItem('turma_id', value)
    this.router.navigate([{outlets: {turma: 'ver-turma'}}])
  }

  editarTurma(value:string){
    localStorage.setItem('turma', value)
    this.router.navigate([{outlets: {turma: 'editar-turma'}}])
  }

  deletarTurma(){
    console.log(this.turma);
    this.turmaService.deletarTurma(this.turma._id).then((res => {
      this.novaTurma = true;
    }));
  }

  openVerticallyCentered(content:any) {
    this.modalService.open(content, { centered: true});
  }
}
