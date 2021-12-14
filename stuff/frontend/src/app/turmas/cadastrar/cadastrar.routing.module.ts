import { CadastrarComponent } from './cadastrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';;

const routes: Routes = [
  {
    path: '',
    component: CadastrarComponent,
    data: {
      title: 'CADASTRAR PAINEL'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CadastrarRoutingModule { }
