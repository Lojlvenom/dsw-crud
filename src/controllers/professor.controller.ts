import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { get } from 'http';
import { Professor } from 'src/shared/schemas/professor.schema';
import { ProfessorService } from 'src/shared/services/professor.service';

@Controller('professor')
export class ProfessorController {
    constructor(private professorService: ProfessorService){}

    @Get()
    async listarTodos(): Promise<Professor[]>{
        return this.professorService.listarTodos();
    }
    @Get(':_id')
    async listarPorId(@Param('_id') _id:string): Promise<Professor>{
        return this.professorService.listarPorId(_id);
    }
    @Post()
    async criarProfessor(@Body() professor:Professor): Promise<Professor>{
        return this.professorService.criarProfessor(professor);
    }
    @Put()
    async atualizarProfessor(@Body('_id') _id:string, @Body() professor:Professor): Promise<Professor>{
        return this.professorService.atualizarProfessor(_id, professor);
    }
    @Delete()
    async deletarProfessor(@Body('_id') _id:string){
        return this.professorService.deletarProfessor(_id);
    }
    @Post()
    async listarPorNome(@Body('nome') nome:string): Promise<Professor[]>{
        return this.professorService.listarPorNome(nome);
    } 

}
