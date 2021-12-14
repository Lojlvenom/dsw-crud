import { ListarComponent } from './listar/listar.component';
import { TurmasComponent } from './turmas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { VerTurmaComponent } from './ver-turma/ver-turma.component';
import { EditarTurmaComponent } from './editar-turma/editar-turma.component';
;

const routes: Routes = [
  {
    path: '',
    component: TurmasComponent,
    data: {
      title: 'TURMAS PAINEL'
    }
  },
  {
    path: 'listar-turmas',
    component: ListarComponent,
    data: {
      title: 'LISTAR PAINEL'
    },
    outlet: "turma"
  },
  {
    path: 'cadastrar-turmas',
    component: CadastrarComponent,
    data: {
      title: 'CADASTRAR PAINEL'
    },
    outlet: "turma"
  },
  {
    path: 'ver-turma',
    component: VerTurmaComponent,
    data: {
      title: 'VER TURMA PAINEL'
    },
    outlet: "turma"
  },
  {
    path: 'editar-turma',
    component: EditarTurmaComponent,
    data: {
      title: 'EDITAR TURMA PAINEL'
    },
    outlet: "turma"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurmasRoutingModule { }
