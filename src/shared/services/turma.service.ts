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
                ID : 1,
                nome : "Tecnico Básico I",
                dataInicio : new Date("2021-06-29T00:04:01.665Z"),
                dataFim : new Date("2021-10-29T00:04:01.665Z"),
                cursoId : "60d8ad29967c085268fb5191",
                professorId : "60d8ad29967c085268fb5197",
                alunosId : [
                    "60d8ad29967c085268fb5186",
                    "60d8ad29967c085268fb5187"
                ],
                createdAt : new Date("2021-08-11T00:19:59.894Z"),
                updatedAt : new Date("2021-08-11T00:21:03.433Z"),
                alunos: [
                    {
                        _id: "60d8ad29967c085268fb5186",
                        nome: 'João Junior Siqueira',
                        matricula: 2019001002
                    },
                    {
                        _id: "60d8ad29967c085268fb5187",
                        nome: 'Beatriz Souza Lima',
                        matricula: 2019001445
                    }
                ],
                professor: {
                    _id:  "60d8ad29967c085268fb5197",
                    nome: 'Benevaldo Pereira Gonçalves'
                },
                cursoFic: {
                    _id:  "60d8ad29967c085268fb5191",
                    nome: 'Desenvolvimento de Software Web'
                }
            },
            {
                _id : "60d8ad29967c085268fb5195",
                ID : 2,
                nome : "Técnico Avançado II",
                dataInicio : new Date("2021-06-29T00:04:01.665Z"),
                dataFim : new Date("2021-10-29T00:04:01.665Z"),
                cursoId : "60d8ad29967c085268fb5192",
                professorId : "60d8ad29967c085268fb5199",
                alunosId : [
                    "60d8ad29967c085268fb5188",
                    "60d8ad29967c085268fb5189"
                ],
                createdAt : new Date("2021-08-11T00:19:59.894Z"),
                updatedAt : new Date("2021-08-11T00:21:03.433Z"),
                alunos: [
                    {
                        _id: "60d8ad29967c085268fb5188",
                        nome: 'Carlos Alberto Silva',
                        matricula: 2019001488
                    },
                    {
                        _id: "60d8ad29967c085268fb5189",
                        nome: 'Ana Aline Pinheiro',
                        matricula: 2019001005
                    }
                ],
                professor:  {
                    _id:  "60d8ad29967c085268fb5199",
                    nome: 'Albert França Josua Costa'
                },
                cursoFic: {
                    _id:  "60d8ad29967c085268fb5192",
                    nome: 'Persistência Java com MySQL'
                }
            },
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
