import { Body, Controller, Delete, Get, Param, Post, Patch, Res, HttpCode } from '@nestjs/common';
import { Response } from 'express';
import { Aluno } from 'src/shared/schemas/aluno.schema';
import { AlunoService } from 'src/shared/services/aluno.service';

@Controller('aluno')
export class AlunoController {
    constructor(private alunoService: AlunoService){}

    @Get()
    async listarTodos(): Promise<any>{
        return this.alunoService.listarTodos();
    }

    @Get(':_id')
    async listarPorId(@Param('_id') _id:number): Promise<any>{
        return this.alunoService.listarPorId(_id);
    }

    @Post('buscar-termo')
    @HttpCode(200)
    async listarPorNome(@Body('termo') termo:string): Promise<any[]>{
        return this.alunoService.listarPorNome(termo);
    }

    @Post()
    async criarAluno(@Body() aluno:Aluno): Promise<any>{
        return this.alunoService.criarAluno(aluno);
    }

    @Patch()
    async atualizarAluno(@Body('_id') _id:number, @Body() aluno:Aluno): Promise<any>{
        return this.alunoService.atualizarAluno(aluno, _id);
    }

    @Delete(':_id')
    async deletarNome(@Param('_id') _id:number, @Res() response: Response) {
        let isDeleted = this.alunoService.deletarAluno(_id);
        isDeleted.then( res => {
            if (!res){
                response.status(404).send('');
            } else {
                response.status(200).send('');
            }
        });
    }
}
