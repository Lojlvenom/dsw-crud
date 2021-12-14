import { TurmaCreateInterface } from './../interfaces/turma.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TurmaInterface } from '../interfaces/turma.interface';
import { ApiTurmaRoutes } from '../routes/api-turma-routes';
import { environment } from 'src/environments/environment';

const API_URL_BASE = environment.urlBase;
const TURMA = ApiTurmaRoutes;

@Injectable({
  providedIn: 'root'
})
export class TurmaService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http:HttpClient
  ) {}

  listarTurmas() {
    return this.http.get(API_URL_BASE+TURMA.turmas+"?expand="+TURMA.expands.curso, this.httpOptions);
  }

  listarTurmaPorNomeID(termo:string) {
    const arrayPost = { termo: termo };
    return this.http.post(API_URL_BASE+TURMA.listarTurmaPorNomeID+"?expand="+TURMA.expands.curso, arrayPost, this.httpOptions);
  }

  listarTurmaPorId(_id:string) {
    let expands = TURMA.expands.curso+","+TURMA.expands.professor+","+TURMA.expands.alunos;
    return this.http.get<TurmaInterface>(API_URL_BASE+TURMA.listarTurmaPorId+_id+"?expand="+expands, this.httpOptions);
  }

  criarTurma(turma:TurmaCreateInterface){
    return this.http.post(API_URL_BASE+TURMA.turmas, turma, this.httpOptions);
  }

  atualizarTurma(turma:TurmaInterface){
    let expands = TURMA.expands.curso+","+TURMA.expands.professor+","+TURMA.expands.alunos;
    return this.http.put<TurmaInterface>(API_URL_BASE+TURMA.turmas+"?expand="+expands, turma, this.httpOptions);
  }

  async deletarTurma(_id:string){
    await this.http.delete(API_URL_BASE+TURMA.delete+_id, this.httpOptions).subscribe(res => {
      console.log(res);
    });
  }
}
