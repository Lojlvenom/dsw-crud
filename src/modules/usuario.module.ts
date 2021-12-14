import { UsuarioService } from './../shared/services/usuario.service';
import { UsuarioController } from './../controllers/usuario.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioSchema } from 'src/shared/schemas/usuario.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Usuario',
            schema: UsuarioSchema
        }])
    ],
    controllers: [
        UsuarioController],
    providers: [
        UsuarioService]
})
export class UsuarioModule { }
