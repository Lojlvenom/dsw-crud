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
        return [
            {
                _id : "60d8ad29967c085268fb5194",
                alunosId : [
                        "60d8ad29967c085268fb5186",
                        "60d8ad29967c085268fb5187"
                ],
                ID : 1,
                nome : "Tecnico Básico I",
                dataInicio : new Date("2021-06-29T00:04:01.665Z"),
                dataFim : new Date("2021-10-29T00:04:01.665Z"),
                cursoId : "60d8ad29967c085268fb5191",
                professorId : "60d8ad29967c085268fb5197",
                createdAt : new Date("2021-08-11T00:19:59.894Z"),
                updatedAt : new Date("2021-08-11T00:21:03.433Z")
            },
            {
                _id : "60d8ad29967c085268fb5195",
                alunosId : [
                        "60d8ad29967c085268fb5188",
                        "60d8ad29967c085268fb5189"
                ],
                ID : 2,
                nome : "Técnico Avançado II",
                dataInicio : new Date("2021-06-29T00:04:01.665Z"),
                dataFim : new Date("2021-10-29T00:04:01.665Z"),
                cursoId : "60d8ad29967c085268fb5192",
                professorId : "60d8ad29967c085268fb5199",
                createdAt : new Date("2021-08-11T00:19:59.894Z"),
                updatedAt : new Date("2021-08-11T00:21:03.433Z")
            },
            {
                _id : "60d8ad29967c085268fb5196",
                alunosId : [
                        "60d8ad29967c085268fb5189",
                        "60d8ad29967c085268fb5187"
                ],
                ID : 3,
                nome : "Iniciante I",
                dataInicio : new Date("2021-06-29T00:04:01.665Z"),
                dataFim : new Date("2021-10-29T00:04:01.665Z"),
                cursoId : "60d8ad29967c085268fb5193",
                professorId : "60d8ad29967c085268fb5197",
                createdAt : new Date("2021-08-11T00:19:59.894Z"),
                updatedAt : new Date("2021-08-11T00:21:03.433Z")
            },
            {
                _id : "60d8ad29967c085268fb5230",
                alunosId : [
                        "60d8ad29967c085268fb5222",
                        "60d8ad29967c085268fb5221",
                        "60d8ad29967c085268fb5220",
                        "60d8ad29967c085268fb5190"
                ],
                ID : 4,
                nome : "Iniciante III",
                dataInicio : new Date("2021-06-29T00:04:01.665Z"),
                dataFim : new Date("2021-10-29T00:04:01.665Z"),
                cursoId : "60d8ad29967c085268fb5216",
                professorId : "60d8ad29967c085268fb5197",
                createdAt : new Date("2021-08-11T00:19:59.894Z"),
                updatedAt : new Date("2021-08-11T00:21:03.433Z")
            }
        ];
    }

    // async listarPorId(_id:string,expand:string)
    // {
    //     let virtuals;
    //     if (expand == undefined){
    //         virtuals = [];
    //     } else {
    //         virtuals = expand.split(",");
    //     }
    //     return this.turmaModel.findById(_id).populate(virtuals).exec();
    // }

    // async listarPorNomeID(termo:any,expand:string)
    // {
    //     const onlyNumbers = /^\d+$/.test(termo);
    //     let virtuals;
    //     if (expand == undefined){
    //         virtuals = [];
    //     } else {
    //         virtuals = expand.split(",");
    //     }
    //     if (onlyNumbers){
    //         return this.turmaModel.find({ID: termo}).populate(virtuals).sort({nome: 1}).limit(10).exec();
    //     } else {
    //         return this.turmaModel.find({nome: {$regex: termo, $options: "i"}}).populate(virtuals).sort({nome: 1}).limit(10).exec();
    //     }
    // }

    // async criarTurma(turma:Turma)
    // {
    //     let id: number;
    //     let qtdTurmas = await this.turmaModel.find().sort({ID: -1}).limit(1).exec();
    //     const turmaCriada = new this.turmaModel(turma);
    //     if(qtdTurmas.length>0){
    //         id = qtdTurmas[0].ID;
    //         turmaCriada.ID = id+1;
    //     } else {
    //         turmaCriada.ID = 1;
    //     }
    //     return await turmaCriada.save();
    // }

    // async atualizarTurma(_id:string, turma:Turma, expand:string)
    // {
    //     await this.turmaModel.updateOne({_id:_id}, turma).exec();
    //     return this.listarPorId(_id, expand);
    // }

    // async deletarTurma(_id:string)
    // {
    //     return await this.turmaModel.deleteOne({_id:_id}).exec();
    // }

    // async listarTurmasNaArray(turmasId:string[]){
    //     return await this.turmaModel.find({_id: {$in:turmasId}}).sort({nome: 1}).exec();
    // }
}
