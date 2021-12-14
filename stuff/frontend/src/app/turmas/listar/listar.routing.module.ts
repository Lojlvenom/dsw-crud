import { ListarComponent } from './listar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';;

const routes: Routes = [
  {
    path: '',
    component: ListarComponent,
    data: {
      title: 'LISTAR PAINEL'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ListarRoutingModule { }
