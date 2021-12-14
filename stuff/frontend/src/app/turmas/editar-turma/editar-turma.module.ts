import { PipesModule } from './../../shared/pipes/pipes.module';
import { MaterialAngular } from 'src/app/shared/style/material-angular.module';
import { EditarTurmaRoutingModule } from './editar-turma.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarTurmaComponent } from './editar-turma.component';

@NgModule({
  imports: [
    CommonModule,
    EditarTurmaRoutingModule,
    MaterialAngular,
    PipesModule
  ],
  declarations: [EditarTurmaComponent],
  exports: [EditarTurmaComponent]
})
export class EditarTurmaModule { }
