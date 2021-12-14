import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CursoFicInterface } from "../interfaces/cursofic.interface";
import { ApiCursoFicRoutes } from "../routes/api-cursofic-routes";
import { environment } from './../../../environments/environment';

const API_URL_BASE = environment.urlBase;
const CURSO = ApiCursoFicRoutes;

@Injectable({
    providedIn: 'root'
})
export class CursoFicService {
    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(
        private http:HttpClient
    ) {}

    listarCursos() {
        return this.http.get(API_URL_BASE+CURSO.cursos, this.httpOptions);
    }

    listarCursosPorId(_id:string) {
        return this.http.get(API_URL_BASE+CURSO.listarCursosPorId+_id);
    }

    listarCursosPorNomeID(termo:string) {
        const arrayPost = { termo: termo};
        return this.http.post(API_URL_BASE+CURSO.listarCursosPorNomeID, arrayPost);
    }

    criarCurso(curso: CursoFicInterface) {
        return this.http.post(API_URL_BASE+CURSO.cursos, curso);
    }

    atualizarCurso(curso: CursoFicInterface) {
        return this.http.put(API_URL_BASE+CURSO, curso);
    }

    deletarCurso(_id:string) {
        this.http.delete(API_URL_BASE+CURSO.delete+_id);
    }
}


