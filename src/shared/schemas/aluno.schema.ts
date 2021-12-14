import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, SchemaTypes, Types } from "mongoose";

@Schema({ timestamps: true, versionKey: false, id: false })
export class Aluno extends Document{
    _id: string;

    @Prop({required: true})
    nome: string;

    @Prop({required: true})
    matricula: number;
}

export const AlunoSchema = SchemaFactory.createForClass(Aluno);
