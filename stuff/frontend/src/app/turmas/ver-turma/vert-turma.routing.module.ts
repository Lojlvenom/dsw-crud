import { VerTurmaComponent } from './ver-turma.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';;

const routes: Routes = [
  {
    path: '',
    component: VerTurmaComponent,
    data: {
      title: 'VER TURMA PAINEL'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class VerTurmaRoutingModule { }
