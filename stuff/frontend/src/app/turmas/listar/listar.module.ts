import { MaterialAngular } from './../../shared/style/material-angular.module';
import { ListarRoutingModule } from './listar.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    ListarRoutingModule,
    MaterialAngular,
    PipesModule
  ],
  declarations: [ListarComponent],
  exports:[
    ListarComponent
  ]
})
export class ListarModule { }
