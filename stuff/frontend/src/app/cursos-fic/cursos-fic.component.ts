import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos-fic',
  templateUrl: './cursos-fic.component.html',
  styleUrls: ['./cursos-fic.component.css']
})
export class CursosFicComponent implements OnInit {
  cursos_fic = document.getElementById('cursos-fic');
  hiddenList = false;
  hiddenCreate = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToList(){
    this.router.navigate([{outlets: {curso: 'listar-cursos'}}]);
  }

  goToCreate(){
    this.router.navigate([{outlets: {curso: 'cadastrar-cursos'}}]);
  }
}
