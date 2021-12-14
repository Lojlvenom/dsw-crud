import { MaterialAngular } from './../../shared/style/material-angular.module';
import { CadastrarRoutingModule } from './cadastrar.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar.component';

@NgModule({
  imports: [
    CommonModule,
    CadastrarRoutingModule,
    MaterialAngular
  ],
  declarations: [CadastrarComponent],
  exports: [
    CadastrarComponent
  ]
})
export class CadastrarModule { }
