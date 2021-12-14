import { AlunoModule } from './modules/aluno.module';
import { ProfessorModule } from './modules/professor.module';
import { CursoFicModule } from './modules/cursoFic.module';
import { TurmaModule } from './modules/turma.module';
import { UsuarioModule } from './modules/usuario.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProfessorModule,
    CursoFicModule,
    TurmaModule,
    CursoFicModule,
    UsuarioModule,
    AlunoModule,
    // AMBIENTE PROD
    // MongooseModule.forRoot('mongodb://database-crud:27027', {
    //   dbName: "cruddb",
    //   user: 'root',
    //   pass: 'example',
    //   authSource: "admin"
    // })
    // AMBIENTE DEV
    // MongooseModule.forRoot('mongodb://localhost:27027', {
    //   dbName: "cruddb",
    //   user: 'root',
    //   pass: 'example',
    //   authSource: "admin"
    // })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
