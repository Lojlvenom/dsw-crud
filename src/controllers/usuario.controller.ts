import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Usuario } from 'src/shared/schemas/usuario.schema';
import { UsuarioService } from 'src/shared/services/usuario.service';

@Controller('usuario')
export class UsuarioController {
    constructor(private usuarioService: UsuarioService){}

    @Get()
    async listarTodos(): Promise<Usuario[]>{
        return this.usuarioService.listarTodos();
    }

    @Get(':_id')
    async listarPorId(@Param('_id') _id:string): Promise<Usuario>{
        return this.usuarioService.listarPorId(_id);
    }

    @Post()
    async criarUsuario(@Body() usuario:Usuario): Promise<Usuario>{
        return this.usuarioService.criarUsuario(usuario);
    }

    @Put()
    async atualizarUsuario(@Body('_id') _id:string, @Body() usuario:Usuario): Promise<Usuario>{
        return this.usuarioService.atualizarUsuario(usuario, _id);
    }

    @Delete()
    async deletarUsuario(@Body('_id') _id:string) {
        return this.usuarioService.deletarUsuario(_id);
    }
}
