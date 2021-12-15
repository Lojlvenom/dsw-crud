import { TurmaService } from './../shared/services/turma.service';
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Query, Patch, Res } from '@nestjs/common';
import { Turma } from 'src/shared/schemas/turma.schema';
import { Response } from 'express';

@Controller('turma')
export class TurmaController {
    constructor(private turmaService: TurmaService){}

    @Get()
    async listarTodas(@Query('expand') expand:string): Promise<any[]>
    {
        return this.turmaService.listarTodas(expand);
    }

    @Get(':_id')
    async listarPorId(@Param('_id') _id:number, @Query('expand') expand:string): Promise<any>
    {
        return this.turmaService.listarPorId(_id, expand);
    }

    @Post('buscar-termo')
    @HttpCode(200)
    async listarPorNomeID(@Body('termo') termo:string, @Query('expand') expand:string): Promise<any[]>
    {
        return this.turmaService.listarPorNome(termo, expand);
    }

    @Post()
    async criarTurma(@Body() turma:Turma): Promise<any>
    {
        return this.turmaService.criarTurma(turma);
    }

    @Patch()
    async atualizarTurma(@Body('_id') _id:number, @Body() turma:Turma, @Query('expand') expand:string): Promise<any>
    {
        return this.turmaService.atualizarTurma(_id, turma, expand);
    }

    @Delete(':_id')
    async deletarTurma(@Param('_id') _id:number, @Res() response: Response)
    {
        let isDeleted = this.turmaService.deletarTurma(_id);
        isDeleted.then( res => {
            if (!res){
                response.status(404).send('');
            } else {
                response.status(200).send('');
            }
        });
    }

    // @Post('listar-array')
    // async listarlistarTurmasNaArray(@Body('turmasId') post:string[]): Promise<Turma[]>
    // {
    //     return this.turmaService.listarTurmasNaArray(post);
    // }
}
