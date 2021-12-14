import { SiginComponent } from './sigin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SiginComponent,
    data: {
      title: 'SINGIN PAINEL'
    }
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SiginRoutingModule { }
