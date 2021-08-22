import { PipesModule } from './../../shared/pipes/pipes.module';
import { MaterialAngular } from './../../shared/style/material-angular.module';
import { CadastrarRoutingModule } from './cadastrar.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar.component';

@NgModule({
  imports: [
    CommonModule,
    CadastrarRoutingModule,
    MaterialAngular,
    PipesModule
  ],
  declarations: [CadastrarComponent],
  exports: [
    CadastrarComponent
  ]
})
export class CadastrarModule { }
