import { Component, OnInit } from '@angular/core';
import { CursoFicService } from 'src/app/shared/services/cursofic.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  curso: any;

  constructor (
    private cursoFicService: CursoFicService
    ) { 
    }

  ngOnInit() {
  }

  cadastrarCursoFic(nome:string) {
    const dadosCurso =  {
      nome: nome
    };
    this.curso = dadosCurso;

    this.cursoFicService.criarCurso(this.curso).subscribe((res => {
      this.curso = res;
      console.log(this.curso);
    }));
  }

}
