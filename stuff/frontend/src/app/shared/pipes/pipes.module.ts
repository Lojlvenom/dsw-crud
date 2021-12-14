import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverteDataPipe } from './converte-data.pipe';



@NgModule({
  declarations: [
    ConverteDataPipe
  ],
  imports: [CommonModule],
  exports: [
    ConverteDataPipe
  ]
})
export class PipesModule { }
