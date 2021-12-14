import { Turma } from '../schemas/turma.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TurmaService {
    // constructor(@InjectModel(Turma.name) private readonly turmaModel: Model<Turma>){}

    async listarTodas(expand:string)
    {
        // let virtuals;
        // if (expand == undefined){
        //     virtuals = [];
        // } else {
        //     virtuals = expand.split(",");
        // }
        return JSON.parse(localStorage.getItem('turma'));
    }

    async listarPorId(_id:number,expand:string)
    {
    //     let virtuals;
    //     if (expand == undefined){
    //         virtuals = [];
    //     } else {
    //         virtuals = expand.split(",");
    //     }
        let json: Array<Turma> = JSON.parse(localStorage.getItem('turma'));
        for (let i=0; i< json.length; i++){
            if (json[i]._id == _id){
                return json[i];
            }
        }
        return [];
    //     return this.turmaModel.findById(_id).populate(virtuals).exec();
    }

    async listarPorNome(termo:string,expand:string)
    {
        // const onlyNumbers = /^\d+$/.test(termo);
        // let virtuals;
        // if (expand == undefined){
        //     virtuals = [];
        // } else {
        //     virtuals = expand.split(",");
        // }
        let json: Array<Turma> = JSON.parse(localStorage.getItem('turma'));
        let arrayResponse: Array<Turma> = [];
        for (let i=0; i< json.length; i++){
            if (json[i].nome.toLowerCase().includes(termo) || json[i].nome.includes(termo)){
                arrayResponse.push(json[i]);
            }
        }
        return arrayResponse;
        // if (onlyNumbers){
        //     return this.turmaModel.find({ID: termo}).populate(virtuals).sort({nome: 1}).limit(10).exec();
        // } else {
        //     return this.turmaModel.find({nome: {$regex: termo, $options: "i"}}).populate(virtuals).sort({nome: 1}).limit(10).exec();
        // }
    }

    async criarTurma(turma:Turma)
    {
        let json: Array<Turma> = JSON.parse(localStorage.getItem('turma'));
        if(json.length == 0){
            turma._id = 1
        } else {
            turma._id = json[json.length-1]._id + 1;
        }
        json.push(turma);
        if (turma.nome != undefined) {
            localStorage.setItem('turma', JSON.stringify(json));
        }
        return this.listarPorId(turma._id, '')
        // let id: number;
        // let qtdTurmas = await this.turmaModel.find().sort({ID: -1}).limit(1).exec();
        // const turmaCriada = new this.turmaModel(turma);
        // if(qtdTurmas.length>0){
        //     id = qtdTurmas[0].ID;
        //     turmaCriada.ID = id+1;
        // } else {
        //     turmaCriada.ID = 1;
        // }
        // return await turmaCriada.save();
    }

    async atualizarTurma(_id:number, turma:Turma, expand:string)
    {
        let json: Array<Turma> = JSON.parse(localStorage.getItem('turma'));
        for (let i=0; i< json.length; i++){
            if (json[i]._id == _id){
                json[i] = turma;
                localStorage.setItem('turma', JSON.stringify(json));
                return this.listarPorId(_id, expand);
            }
        }
        return [];
    //     await this.turmaModel.updateOne({_id:_id}, turma).exec();
    //     return this.listarPorId(_id, expand);
    }

    async deletarTurma(_id:number)
    {
        let json: Array<Turma> = JSON.parse(localStorage.getItem('turma'));
        for (let i=0; i< json.length; i++){
            if (json[i]._id == _id){
                json.splice(i, 1);
                localStorage.setItem('turma', JSON.stringify(json));
                return true;
            }
        }
        return false;
        // return await this.turmaModel.deleteOne({_id:_id}).exec();
    }

    // async listarTurmasNaArray(turmasId:string[]){
    //     return await this.turmaModel.find({_id: {$in:turmasId}}).sort({nome: 1}).exec();
    // }
}
