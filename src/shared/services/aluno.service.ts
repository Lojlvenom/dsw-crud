import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
import { Aluno } from '../schemas/aluno.schema';

@Injectable()
export class AlunoService {
    // constructor(@InjectModel(Aluno.name) private readonly alunoModel: Model<Aluno>){}

    async listarTodos(){
        return JSON.parse(localStorage.getItem('aluno'));
    }

    async listarPorId(_id:number){
        let json: Array<Aluno> = JSON.parse(localStorage.getItem('aluno'));
        for (let i=0; i< json.length; i++){
            if (json[i]._id == _id){
                return json[i];
            }
        }
        return [];
    }

    async listarPorNome(termo:string){
        let json: Array<Aluno> = JSON.parse(localStorage.getItem('aluno'));
        let arrayResponse: Array<Aluno> = [];
        for (let i=0; i< json.length; i++){
            if (json[i].nome.toLowerCase().includes(termo) || json[i].nome.includes(termo)){
                arrayResponse.push(json[i]);
            }
        }
        return arrayResponse;
        // return await this.alunoModel.findById(_nome).exec();
    }

    async criarAluno(aluno:Aluno){
        let json: Array<Aluno> = JSON.parse(localStorage.getItem('aluno'));
        if(json.length == 0){
            aluno._id = 1
        } else {
            aluno._id = json[json.length-1]._id + 1;
        }
        json.push(aluno);
        localStorage.setItem('aluno', JSON.stringify(json));
        return this.listarPorId(aluno._id)
        // const alunoCriado = new this.alunoModel(aluno);
        // return await alunoCriado.save();
    }

    async atualizarAluno(aluno:Aluno, _id:number){
        let json: Array<Aluno> = JSON.parse(localStorage.getItem('aluno'));
        for (let i=0; i< json.length; i++){
            if (json[i]._id == _id){
                json[i] = aluno;
                localStorage.setItem('aluno', JSON.stringify(json));
                return this.listarPorId(_id);
            }
        }
        return [];
        // await this.alunoModel.updateOne({_nome: _nome}, aluno).exec();
        // return this.listarPorNome(_nome);
    }

    async deletarAluno(_id:number){
        let json: Array<Aluno> = JSON.parse(localStorage.getItem('aluno'));
        for (let i=0; i< json.length; i++){
            if (json[i]._id == _id){
                json.splice(i, 1);
                localStorage.setItem('aluno', JSON.stringify(json));
                return true;
            }
        }
        return false;
        // return await this.alunoModel.deleteOne({_nome:_nome}).exec();
    }

    // async listarMatricula(){
    //     return await this.alunoModel.find().exec();
    // }
}