import { MaterialAngular } from 'src/app/shared/style/material-angular.module';
import { FooterRoutingModule } from './footer.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    FooterRoutingModule,
    MaterialAngular
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule { }
