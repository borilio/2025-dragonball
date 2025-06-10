import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../models/personaje.model';
import { PersonajeService } from '../../services/personaje.service';
import { RawPersonaje } from '../../models/raw-personaje.model';

@Component({
  selector: 'app-listado-personajes',
  imports: [],
  templateUrl: './listado-personajes.html',
  styleUrl: './listado-personajes.css'
})
export class ListadoPersonajes implements OnInit {
  public personajes: Personaje[];
  public cargando: boolean;

  constructor(private personajeService: PersonajeService) {
    this.personajes = [];
    this.cargando = true;
  }
  
  ngOnInit(): void {
    this.personajeService.getPersonajes().subscribe(
      (datos: RawPersonaje) => {
        // Han llegado los datos correctamente
        console.log(datos.items);
        this.personajes = datos.items;
        this.cargando = false;
      }
    );
  }




}
