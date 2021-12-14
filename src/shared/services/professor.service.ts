import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { stringify } from 'querystring';
import { Professor } from '../schemas/professor.schema';

@Injectable()
export class ProfessorService {
    constructor(@InjectModel(Professor.name) private readonly professorModel: Model<Professor>){}

    async listarTodos(){
        return await this.professorModel.find().exec();
    } 

    async listarPorId(_id:string){
        return await this.professorModel.findById(_id).exec(); 
    }

    async criarProfessor(professor:Professor){
        const professorCriado = new this.professorModel(professor); 
        return await professorCriado.save();
    }
    async atualizarProfessor(_id:string, professor:Professor){
        this.professorModel.updateOne({_id:_id}, professor).exec();
        return this.listarPorId(_id)
    }
    async deletarProfessor(_id:string){
        return await this.professorModel.deleteOne({_id:_id}).exec();
    }
    async listarPorNome(termo:string){
        return this.professorModel.find({nome: {$regex: termo, $options: "i"}}).sort({nome: 1}).limit(10).exec();
    }
}
