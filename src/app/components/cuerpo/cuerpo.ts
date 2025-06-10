import { Component } from '@angular/core';
import { ListadoPersonajes } from "../listado-personajes/listado-personajes";
import { ListadoPlanetas } from "../listado-planetas/listado-planetas";
import { Home } from "../home/home";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cuerpo',
  imports: [
    RouterModule,
    ListadoPersonajes, 
    ListadoPlanetas, 
    Home
  ],
  templateUrl: './cuerpo.html',
  styleUrl: './cuerpo.css'
})
export class Cuerpo {

}
