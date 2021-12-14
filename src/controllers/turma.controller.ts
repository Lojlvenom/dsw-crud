import { TurmaService } from './../shared/services/turma.service';
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query } from '@nestjs/common';
import { Turma } from 'src/shared/schemas/turma.schema';

@Controller('turma')
export class TurmaController {
    constructor(private turmaService: TurmaService){}

    @Get()
    async listarTodas(@Query('expand') expand:string): Promise<any[]>
    {
        return this.turmaService.listarTodas(expand);
    }

    // @Get(':_id')
    // async listarPorId(@Param('_id') _id:string, @Query('expand') expand:string): Promise<Turma>
    // {
    //     return this.turmaService.listarPorId(_id, expand);
    // }

    // @Post('listar-nome-id')
    // @HttpCode(200)
    // async listarPorNomeID(@Body('termo') termo:any, @Query('expand') expand:string): Promise<Turma[]>
    // {
    //     return this.turmaService.listarPorNomeID(termo, expand);
    // }

    // @Post()
    // async criarTurma(@Body() turma:Turma): Promise<Turma>
    // {
    //     return this.turmaService.criarTurma(turma);
    // }

    // @Put()
    // async atualizarTurma(@Body('_id') _id:string, @Body() turma:Turma, @Query('expand') expand:string): Promise<Turma>
    // {
    //     return this.turmaService.atualizarTurma(_id, turma, expand);
    // }

    // @Delete(':_id')
    // async deletarTurma(@Param('_id') _id:string)
    // {
    //     return this.turmaService.deletarTurma(_id);
    // }

    // @Post('listar-array')
    // async listarlistarTurmasNaArray(@Body('turmasId') post:string[]): Promise<Turma[]>
    // {
    //     return this.turmaService.listarTurmasNaArray(post);
    // }
}
