import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialAngular } from 'src/app/shared/style/material-angular.module';
import { ListarComponent } from './listar.component';
import { ListarRoutingModule } from './listar.routing.module';

@NgModule({
    imports: [
        CommonModule,
        ListarRoutingModule,
        MaterialAngular
        
    ],
    declarations: [ListarComponent],
    exports:[
        ListarComponent
    ]
})
export class ListarModule {}
