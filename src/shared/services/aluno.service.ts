import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Aluno } from '../schemas/aluno.schema';

@Injectable()
export class AlunoService {
    // constructor(@InjectModel(Aluno.name) private readonly alunoModel: Model<Aluno>){}

    async listarTodos(){
        return [
            {
                _id: "60d8ad29967c085268fb5186",
                nome: 'João Junior Siqueira',
                matricula: 2019001002,
                createdAt: new Date("2021-06-11T00:04:01.665Z"),
                updatedAt: new Date("2021-06-11T00:04:01.665Z")
            },
            {
                _id: "60d8ad29967c085268fb5187",
                nome: 'Beatriz Souza Lima',
                matricula: 2019001445,
                createdAt: new Date("2021-06-29T00:04:01.665Z"),
                updatedAt: new Date("2021-06-29T00:04:01.665Z")
            },
            {
                _id: "60d8ad29967c085268fb5188",
                nome: 'Carlos Alberto Silva',
                matricula: 2019001488,
                createdAt: new Date("2021-06-29T00:04:01.665Z"),
                updatedAt: new Date("2021-06-29T00:04:01.665Z")
            },
            {
                _id: "60d8ad29967c085268fb5189",
                nome: 'Ana Aline Pinheiro',
                matricula: 2019001005,
                createdAt: new Date("2021-06-29T00:04:01.665Z"),
                updatedAt: new Date("2021-06-29T00:04:01.665Z")
            },
            {
                _id: "60d8ad29967c085268fb5190",
                nome: 'Ronaldo Campos Barros',
                matricula: 2019099445,
                createdAt: new Date("2021-06-29T00:04:01.665Z"),
                updatedAt: new Date("2021-06-29T00:04:01.665Z")
            }
        ];
    }

    // async listarPorNome(_nome:string){
    //     return await this.alunoModel.findById(_nome).exec();
    // }
    // async criarAluno(aluno:Aluno){
    //     const alunoCriado = new this.alunoModel(aluno);
    //     return await alunoCriado.save();
    // }

    // async atualizarAluno(aluno:Aluno, _nome:string){
    //     await this.alunoModel.updateOne({_nome: _nome}, aluno).exec();
    //     return this.listarPorNome(_nome);
    // }

    // async deletarAluno(_nome:string){
    //     return await this.alunoModel.deleteOne({_nome:_nome}).exec();
    // }
    // async listarMatricula(){
    //     return await this.alunoModel.find().exec();
    // }
}