import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarTurmaComponent } from './editar-turma.component';
;

const routes: Routes = [
  {
    path: '',
    component: EditarTurmaComponent,
    data: {
      title: 'EDITAR TURMA PAINEL'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EditarTurmaRoutingModule { }
