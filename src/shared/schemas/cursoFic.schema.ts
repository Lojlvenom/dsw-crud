import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document, SchemaTypes, Types} from "mongoose";

@Schema({ timestamps: false, versionKey: false, toJSON: { virtuals: true}, id: false})
export class CursoFic extends Document{
    _id: string;

    @Prop()
    ID: number;

    @Prop({required: true})
    nome: string;
}

export const CursoFicSchema = SchemaFactory.createForClass(CursoFic);

CursoFicSchema.virtual('turmas', {
    ref:'Turma',
    localField: '_id',
    foreignField: 'cursoId'
})