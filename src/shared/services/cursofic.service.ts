import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
import { CursoFic } from '../schemas/cursoFic.schema';

@Injectable()
export class CursoFicService {
    // constructor(@InjectModel(CursoFic.name) private readonly cursoFicModel: Model<CursoFic>){}
    
    async listarCursos()
    {
        return JSON.parse(localStorage.getItem('cursoFic'));
    }

    async listarCursoPorId(_id:number)
    {
        let json: Array<CursoFic> = JSON.parse(localStorage.getItem('cursoFic'));
        for (let i=0; i< json.length; i++){
            if (json[i]._id == _id){
                return json[i];
            }
        }
        return [];
        // return await this.cursoFicModel.findById(_id).exec();
    }

    async listarCursoPorNome(termo:any)
    {
        let json: Array<CursoFic> = JSON.parse(localStorage.getItem('cursoFic'));
        let arrayResponse: Array<CursoFic> = [];
        for (let i=0; i< json.length; i++){
            if (json[i].nome.toLowerCase().includes(termo) || json[i].nome.includes(termo)){
                arrayResponse.push(json[i]);
            }
        }
        return arrayResponse;
        // const onlyNumbers = /^\d+$/.test(termo);
        // if (onlyNumbers){
        //     return this.cursoFicModel.find({ID: termo}).sort({nome: 1}).limit(10).exec();
        // } else {
        //     return this.cursoFicModel.find({nome: {$regex: termo, $options: "i"}}).sort({nome: 1}).limit(10).exec();
        // }
    }

    async criarCurso(cursoFic: CursoFic)
    {
        let json: Array<CursoFic> = JSON.parse(localStorage.getItem('cursoFic'));
        if(json.length == 0){
            cursoFic._id = 1
        } else {
            cursoFic._id = json[json.length-1]._id + 1;
        }
        json.push(cursoFic);
        localStorage.setItem('cursoFic', JSON.stringify(json));
        return this.listarCursoPorId(cursoFic._id)
        // const cursoCriado = new this.cursoFicModel(curso);
        // return await cursoCriado.save();
    }

    async atualizarCurso(_id:number, curso:CursoFic)
    {
        let json: Array<CursoFic> = JSON.parse(localStorage.getItem('cursoFic'));
        for (let i=0; i< json.length; i++){
            if (json[i]._id == _id){
                json[i] = curso;
                localStorage.setItem('cursoFic', JSON.stringify(json));
                return this.listarCursoPorId(_id);
            }
        }
        return [];
    //     await this.cursoFicModel.updateOne({_id:_id}, curso).exec();
    //     return this.listarCursoPorId(_id);
    }

    async deletarCurso(_id:number)
    {
        let json: Array<CursoFic> = JSON.parse(localStorage.getItem('cursoFic'));
        for (let i=0; i< json.length; i++){
            if (json[i]._id == _id){
                json.splice(i, 1);
                localStorage.setItem('cursoFic', JSON.stringify(json));
                return true;
            }
        }
        return false;
        // return await this.cursoFicModel.deleteOne({_id:_id}).exec();
    }
}
