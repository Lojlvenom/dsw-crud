import { MaterialAngular } from './../../shared/style/material-angular.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiginComponent } from './sigin.component';
import { SiginRoutingModule } from './sigin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SiginRoutingModule,
    MaterialAngular
  ],
  declarations: [SiginComponent],
  exports: [SiginComponent]
})
export class SiginModule { }
