import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario } from '../schemas/usuario.schema';

@Injectable()
export class UsuarioService {
    constructor(@InjectModel(Usuario.name) private readonly usuarioModel: Model<Usuario>){}

    async listarTodos(){
        return await this.usuarioModel.find().exec();
    }

    async listarPorId(_id:string){
        return await this.usuarioModel.findById(_id).exec();
    }
    async criarUsuario(usuario:Usuario){
        const usuarioCriado = new this.usuarioModel(usuario);
        return await usuarioCriado.save();
    }

    async atualizarUsuario(usuario:Usuario, _id:string){
        await this.usuarioModel.updateOne({_id: _id}, usuario).exec();
        return this.listarPorId(_id);
    }

    async deletarUsuario(_id:string){
        return await this.usuarioModel.deleteOne({_id:_id}).exec();
    }
}
