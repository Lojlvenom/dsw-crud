import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({timestamps: true, versionKey: false})
export class Usuario extends Document{

    @Prop({required: true})
    nome: string;

    @Prop({required: true})
    login: string;

    @Prop({required: true})
    senha: string;

    @Prop({required: true})
    email: string;

}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
