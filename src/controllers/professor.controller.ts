import { Controller, Get, Param, Post, Body, Delete, Patch, Res, Query, HttpCode } from '@nestjs/common';
import { Response } from 'express';
import { Professor } from 'src/shared/schemas/professor.schema';
import { ProfessorService } from 'src/shared/services/professor.service';

@Controller('professor')
export class ProfessorController {
    constructor(private professorService: ProfessorService){}

    @Get()
    async listarTodos(): Promise<any[]>{
        return this.professorService.listarTodos();
    }
    
    @Get(':_id')
    async listarPorId(@Param('_id') _id:number): Promise<any>{
        return this.professorService.listarPorId(_id);
    }

    @Post()
    async criarProfessor(@Body() professor:Professor): Promise<any>{
        return this.professorService.criarProfessor(professor);
    }
    
    @Patch()
    async atualizarProfessor(@Body('_id') _id:number, @Body() professor:Professor): Promise<any>{
        return this.professorService.atualizarProfessor(_id, professor);
    }

    @Delete(':_id')
    async deletarProfessor(@Param('_id') _id:number, @Res() response:Response ){
        let isDeleted = this.professorService.deletarProfessor(_id);
        isDeleted.then( res => {
            if (!res){
                response.status(404).send('');
            } else {
                response.status(200).send('');
            }
        });
    }

    @Post('buscar-termo')
    @HttpCode(200)
    async listarPorNome(@Body('termo') termo:string): Promise<any[]>{
        return this.professorService.listarPorNome(termo);
    } 

}
