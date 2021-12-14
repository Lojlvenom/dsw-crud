import { Turma } from '../schemas/turma.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TurmaService {
    constructor(@InjectModel(Turma.name) private readonly turmaModel: Model<Turma>){}

    async listarTodas(expand:string)
    {
        let virtuals;
        if (expand == undefined){
            virtuals = [];
        } else {
            virtuals = expand.split(",");
        }
        return await this.turmaModel.find().populate(virtuals).sort({nome: 1}).exec();
    }

    async listarPorId(_id:string,expand:string)
    {
        let virtuals;
        if (expand == undefined){
            virtuals = [];
        } else {
            virtuals = expand.split(",");
        }
        return this.turmaModel.findById(_id).populate(virtuals).exec();
    }

    async listarPorNomeID(termo:any,expand:string)
    {
        const onlyNumbers = /^\d+$/.test(termo);
        let virtuals;
        if (expand == undefined){
            virtuals = [];
        } else {
            virtuals = expand.split(",");
        }
        if (onlyNumbers){
            return this.turmaModel.find({ID: termo}).populate(virtuals).sort({nome: 1}).limit(10).exec();
        } else {
            return this.turmaModel.find({nome: {$regex: termo, $options: "i"}}).populate(virtuals).sort({nome: 1}).limit(10).exec();
        }
    }

    async criarTurma(turma:Turma)
    {
        let id: number;
        let qtdTurmas = await this.turmaModel.find().sort({ID: -1}).limit(1).exec();
        const turmaCriada = new this.turmaModel(turma);
        if(qtdTurmas.length>0){
            id = qtdTurmas[0].ID;
            turmaCriada.ID = id+1;
        } else {
            turmaCriada.ID = 1;
        }
        return await turmaCriada.save();
    }

    async atualizarTurma(_id:string, turma:Turma, expand:string)
    {
        await this.turmaModel.updateOne({_id:_id}, turma).exec();
        return this.listarPorId(_id, expand);
    }

    async deletarTurma(_id:string)
    {
        return await this.turmaModel.deleteOne({_id:_id}).exec();
    }

    async listarTurmasNaArray(turmasId:string[]){
        return await this.turmaModel.find({_id: {$in:turmasId}}).sort({nome: 1}).exec();
    }
}
