import { CursoFicSchema } from 'src/shared/schemas/cursoFic.schema';
import { TurmaSchema } from '../shared/schemas/turma.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { TurmaService } from './../shared/services/turma.service';
import { TurmaController } from './../controllers/turma.controller';
import { Module } from '@nestjs/common';
import { ProfessorSchema } from 'src/shared/schemas/professor.schema';
import { AlunoSchema } from 'src/shared/schemas/aluno.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Turma',
            schema: TurmaSchema
        }]),
        MongooseModule.forFeature([{
            name: 'Professor',
            schema: ProfessorSchema
        }]),
        MongooseModule.forFeature([{
            name: 'Aluno',
            schema: AlunoSchema
        }]),
        MongooseModule.forFeature([{
            name: 'CursoFic',
            schema: CursoFicSchema
        }])
    ],
    controllers: [
        TurmaController,],
    providers: [
        TurmaService,],
})
export class TurmaModule { }
