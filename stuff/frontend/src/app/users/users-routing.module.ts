import { IndexComponent } from './index/index.component';
import { SiginComponent } from './sigin/sigin.component';
import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    data: {
      title: 'USERS PAINEL'
    }
  },
  {
    path: 'sigin',
    component: SiginComponent,
    data: {
      title: 'SIGN PAINEL'
    }
  },
  {
    path: 'search',
    component: SearchComponent,
    data: {
      title: 'SEARCH PAINEL'
    }
  },
  {
    path: 'index',
    component: IndexComponent,
    data: {
      title: 'INDEX PAINEL'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
