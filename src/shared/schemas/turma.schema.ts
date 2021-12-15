import { Aluno } from 'src/shared/schemas/aluno.schema';
import { Professor } from 'src/shared/schemas/professor.schema';
import { CursoFic } from 'src/shared/schemas/cursoFic.schema';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, SchemaTypes, Types } from "mongoose";

@Schema({ timestamps: true, versionKey: false, toJSON: { virtuals: true }, id: false })
export class Turma extends Document{
    _id: number;

    // @Prop()
    // ID: number;

    @Prop({required: true})
    nome: string;

    @Prop({required: true})
    dataInicio: Date;

    @Prop({required: true})
    dataFim: Date;

    // @Prop({ type: SchemaTypes.ObjectId, ref: 'CursoFic', required: true })
    cursoId: number;

    // @Prop({ type: SchemaTypes.ObjectId, ref: 'Professor', required: true })
    professorId: number;

    // @Prop({ type: [ SchemaTypes.ObjectId ], ref: 'Aluno', required: true })
    alunosId: number[];

    curso: CursoFic;

    professor: Professor;

    alunos: Aluno[];
}

export const TurmaSchema = SchemaFactory.createForClass(Turma);

TurmaSchema.virtual('curso', {
    ref: 'CursoFic',
    localField: 'cursoId',
    foreignField: '_id'
})

TurmaSchema.virtual('professor', {
    ref: 'Professor',
    localField: 'professorId',
    foreignField: '_id'
})

TurmaSchema.virtual('alunos', {
    ref: 'Aluno',
    localField: 'alunosId',
    foreignField: '_id'
})