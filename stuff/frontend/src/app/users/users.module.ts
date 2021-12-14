import { MaterialAngular } from './../shared/style/material-angular.module';
import { UpdateModule } from './update/update.module';
import { IndexModule } from './index/index.module';
import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { SiginModule } from './sigin/sigin.module';
import { SearchModule } from './search/search.module'
import { UsersService } from '../shared/services/users.service';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SiginModule,
    SearchModule,
    IndexModule,
    UpdateModule,
    MaterialAngular
  ],
  exports: [
    UsersComponent,
    SiginModule,
    SearchModule
  ],
  providers:[UsersService]
})
export class UsersModule { }
