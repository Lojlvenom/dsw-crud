import { Injectable } from '@nestjs/common';
import { LocalStorage } from "node-localstorage";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { stringify } from 'querystring';
import { Professor } from '../schemas/professor.schema';

@Injectable()
export class ProfessorService {
    // constructor(@InjectModel(Professor.name) private readonly professorModel: Model<Professor>){}

    async listarTodos(){
        return JSON.parse(localStorage.getItem('professor'));
    } 

    async listarPorId(_id:number){
        let json: Array<any> = JSON.parse(localStorage.getItem('professor'));
        for (let i=0; i< json.length; i++){
            if (json[i]._id == _id){
                return json[i];
            }
        }
        return [];
    }

    async criarProfessor(professor:Professor){
        let json: Array<Professor> = JSON.parse(localStorage.getItem('professor'));
        if(json.length === 0){
            professor.id = 1
        } else {
            professor.id = json.length+1;
        }
        json.push(professor);
        localStorage.setItem('professor', JSON.stringify(json));
        return JSON.parse(localStorage.getItem('professor'));
        // const professorCriado = new this.professorModel(professor); 
        // return await professorCriado.save();
    }

    // async atualizarProfessor(_id:string, professor:Professor){
    //     this.professorModel.updateOne({_id:_id}, professor).exec();
    //     return this.listarPorId(_id)
    // }
    // async deletarProfessor(_id:string){
    //     return await this.professorModel.deleteOne({_id:_id}).exec();
    // }
    // async listarPorNome(termo:string){
    //     return this.professorModel.find({nome: {$regex: termo, $options: "i"}}).sort({nome: 1}).limit(10).exec();
    // }
}
