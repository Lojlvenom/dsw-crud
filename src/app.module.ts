import { AlunoModule } from './modules/aluno.module';
import { TurmaModule } from './modules/turma.module';
import { CursoFicModule } from './modules/cursoFic.module';
import { ProfessorModule } from './modules/professor.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ProfessorModule,
    CursoFicModule,
    TurmaModule,
    CursoFicModule,
    AlunoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
