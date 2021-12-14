import { AlunoService } from './../shared/services/aluno.service';
import { AlunoController } from './../controllers/aluno.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlunoSchema } from 'src/shared/schemas/aluno.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Aluno',
            schema: AlunoSchema
        }])
    ],
    controllers: [
        AlunoController],
    providers: [
        AlunoService]
})
export class AlunoModule { }
