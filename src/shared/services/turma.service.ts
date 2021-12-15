import { Aluno } from 'src/shared/schemas/aluno.schema';
import { Turma } from '../schemas/turma.schema';
import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';

@Injectable()
export class TurmaService {
    // constructor(@InjectModel(Turma.name) private readonly turmaModel: Model<Turma>){}

    async listarTodas(expand:string)
    {
        let virtuals: Array<any>;
        if (expand == undefined){
            virtuals = [];
        } else {
            virtuals = expand.split(",");
        }
        let json: Array<Turma> = JSON.parse(localStorage.getItem('turma'));
        if (virtuals.length > 0){
            for (let i=0; i< json.length; i++){
                let expand = this.getExpands(virtuals, json[i]);
                expand.then( (res:any) => {
                    for (let element of res){
                        Object.entries(element).forEach(
                            ([key, value]) => {
                                json[i][key] = value;
                            }
                        );
                    }
                });
            }
        }
        return json;
    }

    async listarPorId(_id:number,expand:string)
    {
        let virtuals: Array<any>;
        if (expand == undefined){
            virtuals = [];
        } else {
            virtuals = expand.split(",");
        }
        let json: Array<Turma> = JSON.parse(localStorage.getItem('turma'));
        for (let i=0; i< json.length; i++){
            if (json[i]._id == _id){
                if (virtuals.length > 0){
                    let expand = this.getExpands(virtuals, json[i]);
                    expand.then( (res:any) => {
                        for (let element of res){
                            Object.entries(element).forEach(
                                ([key, value]) => {
                                    json[i][key] = value;
                                }
                            );
                        }
                    });
                }
                return json[i];
            }
        }
        return [];
    }

    async listarPorNome(termo:string,expand:string)
    {
        let virtuals: Array<any>;
        if (expand == undefined){
            virtuals = [];
        } else {
            virtuals = expand.split(",");
        }
        let json: Array<Turma> = JSON.parse(localStorage.getItem('turma'));
        let arrayResponse: Array<Turma> = [];
        for (let i=0; i< json.length; i++){
            if (json[i].nome.toLowerCase().includes(termo) || json[i].nome.includes(termo)){
                if (virtuals.length > 0){
                    let expand = this.getExpands(virtuals, json[i]);
                    expand.then( (res:any) => {
                        for (let element of res){
                            Object.entries(element).forEach(
                                ([key, value]) => {
                                    json[i][key] = value;
                                }
                            );
                        }
                    });
                }
                arrayResponse.push(json[i]);
            }
        }
        return arrayResponse;
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
    }

    async getExpands(virtuals:Array<string>, turma:Turma){
        let arrayResponse = new Array<any>();
        for (let i=0; i < virtuals.length; i++){
            if (virtuals[i] == 'professor'){
                let professores = JSON.parse(localStorage.getItem('professor'));
                for (let i=0; i < professores.length; i++){
                    if (professores[i]._id == turma.professorId){
                        arrayResponse.push({professor: professores[i]});
                    }
                }
            } else if (virtuals[i] == 'curso'){
                let curso = JSON.parse(localStorage.getItem('cursoFic'));
                for (let i=0; i < curso.length; i++){
                    if (curso[i]._id == turma.cursoId){
                        arrayResponse.push({curso: curso[i]});
                    }
                }
            } else if (virtuals[i] == 'alunos'){
                let arrayAlunos = new Array<Aluno>();
                let alunos = JSON.parse(localStorage.getItem('aluno'));
                for (let i=0; i < alunos.length; i++){
                    for (let x=0; x < turma.alunosId.length; x++){
                        if (alunos[i]._id == turma.alunosId[x]){
                            arrayAlunos.push(alunos[i]);
                        }
                    }
                }
                arrayResponse.push({alunos: arrayAlunos});
            }
        }
        return arrayResponse;
    }
}
