import { ProfessorService } from './../shared/services/professor.service';
import { ProfessorController } from './../controllers/professor.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfessorSchema } from 'src/shared/schemas/professor.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Professor',
            schema: ProfessorSchema
        }])
    ],
    controllers: [
        ProfessorController,],
    providers: [
        ProfessorService,],
})
export class ProfessorModule { }
