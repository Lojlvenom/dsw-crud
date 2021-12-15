import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, SchemaTypes, Types } from "mongoose";

@Schema({ timestamps: true, versionKey: false, id: false })
export class Professor extends Document{
    _id: number;

    @Prop({required: true, maxlength:50})
    nome: string;
}

export const ProfessorSchema = SchemaFactory.createForClass(Professor);