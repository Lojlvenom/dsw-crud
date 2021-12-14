import { HttpClientModule } from '@angular/common/http';
import { FooterModule } from './shared/style/footer/footer.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAngular } from './shared/style/material-angular.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CursosFicModule } from './cursos-fic/cursos-fic.module';
import { TurmasModule } from './turmas/turmas.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    BrowserAnimationsModule,
    MaterialAngular,
    TurmasModule,
    CursosFicModule,
    FooterModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
