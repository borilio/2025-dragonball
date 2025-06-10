import { Component, OnInit } from '@angular/core';
import { PlanetaService } from '../../services/planeta.service';
import { Planeta } from '../../models/planeta.model';

@Component({
  selector: 'app-listado-planetas',
  imports: [],
  templateUrl: './listado-planetas.html',
  styleUrl: './listado-planetas.css'
})
export class ListadoPlanetas implements OnInit {
  public planetas: Planeta[];
  public cargando: boolean;
  public hayError: boolean;

  constructor(private planetaService: PlanetaService) {
    this.planetas = [];
    this.cargando = true;
    this.hayError = false;
  }

  ngOnInit(): void {
    this.planetaService.getPlanetas().subscribe({
      // Función que se ejecuta cuando llegan los datos correctamente
      next: (datos) => {
        this.planetas = datos.items;
        this.cargando = false;
      },
      // Función que se ejecuta cuando se recibe un error desde el servidor
      error: (datos) => {
        this.planetas = [];
        this.cargando = false;
        this.hayError = true;
        console.error(datos);
      }
    });
  }



}
