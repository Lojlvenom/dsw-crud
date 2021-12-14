import { TurmaInterface } from './../../shared/interfaces/turma.interface';
import { TurmaService } from './../../shared/services/turma.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  listTurmas: any;
  turma: TurmaInterface;
  nomeTurma:string="";
  nomeCurso:string="";
  displayedColumns: string[] = ['id', 'name', 'course', 'startDate', 'endDate', 'actions'];

  constructor(
    private router: Router,
    private turmaService: TurmaService,
    private modalService: NgbModal,
    private config: NgbModalConfig,
  ) {
    this.config.backdrop = 'static';
    this.config.keyboard = false;
  }

  ngOnInit() {
    this.listarTurmas();

  }

  async listarTurmas(){
    this.turmaService.listarTurmas().subscribe((res => {
      this.listTurmas = res;
      console.log(this.listTurmas);
    }));
  }

  goToCreate(){
    this.router.navigate([{outlets: {turma: 'cadastrar-turmas'}}]);
  }

  buscaTurma(value:string){
    console.log(value);
    if (value.length < 1){
      this.listarTurmas();
    } else {
      this.turmaService.listarTurmaPorNomeID(value).subscribe((res => {
        this.listTurmas = res;
        console.log(this.listTurmas);
      }));
    }
  }

  verTurma(value:string){
    localStorage.setItem('turma_id', value)
    this.router.navigate([{outlets: {turma: 'ver-turma'}}])
  }

  editarTurma(_id:string){
    localStorage.setItem('turma', _id);
    this.router.navigate([{outlets: {turma: 'editar-turma'}}]);
  }

  deletarTurma(){
    console.log(this.turma);
    this.turmaService.deletarTurma(this.turma._id).then((res => {
      const interval = setTimeout(() => {
        this.listarTurmas();
      }, 1000);
    }));
  }

  openVerticallyCentered(content:any, element:TurmaInterface) {
    this.turma = element;
    this.nomeTurma = element.nome;
    this.nomeCurso = element.curso[0]['nome'];
    this.modalService.open(content, { centered: true});
  }
}
