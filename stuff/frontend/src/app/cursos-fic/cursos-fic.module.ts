import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialAngular } from "../shared/style/material-angular.module";
import { CadastrarModule } from "./cadastrar/cadastrar.module";
import { CursosFicComponent } from "./cursos-fic.component";
import { CursosFicRoutingModule } from "./cursos-fic.routing.module";
import { ListarModule } from "./listar/listar.module";

@NgModule({
    imports: [
        CommonModule,
        CursosFicRoutingModule,
        CadastrarModule,
        ListarModule,
        MaterialAngular
    ],
    declarations: [CursosFicComponent],
    exports:[
        CursosFicComponent
    ]
})
export class CursosFicModule { }