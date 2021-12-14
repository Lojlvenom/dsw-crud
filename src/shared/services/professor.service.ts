import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { stringify } from 'querystring';
import { Professor } from '../schemas/professor.schema';

@Injectable()
export class ProfessorService {
    // constructor(@InjectModel(Professor.name) private readonly professorModel: Model<Professor>){}

    async listarTodos(){
        return [
            {
                _id:  "60d8ad29967c085268fb5197",
                nome: 'Benevaldo Pereira Gonçalves',
                createdAt: new Date("2021-06-11T00:04:01.665Z"),
                updatedAt: new Date("2021-06-11T00:04:01.665Z")
            },
            {
                _id:  "60d8ad29967c085268fb5198",
                nome: 'Paulo Sérgio Ruiz Del Aguila',
                createdAt: new Date("2021-06-11T00:04:01.665Z"),
                updatedAt: new Date("2021-06-11T00:04:01.665Z")
            },
            {
                _id:  "60d8ad29967c085268fb5199",
                nome: 'Albert França Josua Costa',
                createdAt: new Date("2021-06-11T00:04:01.665Z"),
                updatedAt: new Date("2021-06-11T00:04:01.665Z")
            },
            {
                _id:  "60d8ad29967c085268fb5210",
                nome: 'Rafaela Almeida Melo',
                createdAt: new Date("2021-06-11T00:04:01.665Z"),
                updatedAt: new Date("2021-06-11T00:04:01.665Z")
            },
            {
                _id:  "60d8ad29967c085268fb5211",
                nome: 'Renan Moura de Carvalho',
                createdAt: new Date("2021-06-11T00:04:01.665Z"),
                updatedAt: new Date("2021-06-11T00:04:01.665Z")
            },
            {
                _id:  "60d8ad29967c085268fb5212",
                nome: 'Bruna Guedes Pereira',
                createdAt: new Date("2021-06-11T00:04:01.665Z"),
                updatedAt: new Date("2021-06-11T00:04:01.665Z")
            },
            {
                _id:  "60d8ad29967c085268fb5213",
                nome: 'Lucas Damascendo Costa',
                createdAt: new Date("2021-06-11T00:04:01.665Z"),
                updatedAt: new Date("2021-06-11T00:04:01.665Z")
            }
        ];
    } 

    // async listarPorId(_id:string){
    //     return await this.professorModel.findById(_id).exec(); 
    // }

    // async criarProfessor(professor:Professor){
    //     const professorCriado = new this.professorModel(professor); 
    //     return await professorCriado.save();
    // }
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
