import { Body, Controller, Delete, Get, HttpCode, Param, Post, Patch, Res } from '@nestjs/common';
import { Response } from 'express';
import { CursoFic } from 'src/shared/schemas/cursoFic.schema';
import { CursoFicService } from 'src/shared/services/cursofic.service';

@Controller('cursoFic')
export class CursoFicController {
    constructor(private cursoFicService: CursoFicService){}

    @Get()
    async listarCursos(): Promise<any[]>
    {
        return this.cursoFicService.listarCursos();
    }

    @Get(':_id')
    async listarCursoPorId(@Param('_id' ) _id:number): Promise<any>
    {
        return this.cursoFicService.listarCursoPorId(_id);
    }

    @Post('buscar-termo')
    @HttpCode(200)
    async listarCursosPorNomeID(@Body('termo') termo:any): Promise<any[]>
    {
        return this.cursoFicService.listarCursoPorNome(termo);
    }

    @Post()
    async criarCurso(@Body() curso:CursoFic): Promise<any>
    {
        return this.cursoFicService.criarCurso(curso);
    }

    @Patch()
    async atualizarCurso(@Body('_id') _id:number, @Body() curso:CursoFic): Promise<any>
    {
        return this.cursoFicService.atualizarCurso(_id, curso);
    }

    @Delete(':_id')
    async deletarCurso(@Param('_id') _id:number, @Res() response: Response)
    {
        let isDeleted = this.cursoFicService.deletarCurso(_id);
        isDeleted.then( res => {
            if (!res){
                response.status(404).send('');
            } else {
                response.status(200).send('');
            }
        });
    }
}
