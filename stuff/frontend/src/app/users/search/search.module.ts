import { MaterialAngular } from './../../shared/style/material-angular.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    MaterialAngular
  ],
  declarations: [SearchComponent],
  exports: [SearchComponent]
})
export class SearchModule { }
