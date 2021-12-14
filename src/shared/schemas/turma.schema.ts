import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, SchemaTypes, Types } from "mongoose";

@Schema({ timestamps: true, versionKey: false, toJSON: { virtuals: true }, id: false })
export class Turma extends Document{
    _id: string;

    @Prop()
    ID: number;

    @Prop({required: true})
    nome: string;

    @Prop({required: true})
    dataInicio: Date;

    @Prop({required: true})
    dataFim: Date;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'CursoFic', required: true })
    cursoId: Types.ObjectId;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'Professor', required: true })
    professorId: Types.ObjectId;

    @Prop({ type: [ SchemaTypes.ObjectId ], ref: 'Aluno', required: true })
    alunosId:Types.ObjectId[];
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