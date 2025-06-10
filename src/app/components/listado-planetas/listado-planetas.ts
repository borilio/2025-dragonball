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
        this.planetas = datos;
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

  public consultarPlaneta(idPlaneta: number) {
    this.cargando = true;
    this.planetaService.getPlaneta(idPlaneta).subscribe({
      next: (datos) => {
        // Ahora han llegado los datos
        this.cargando = false;
        const cadenaPlaneta = `Nombre: ${datos.name}\nDescripción: ${datos.description}`
        alert(cadenaPlaneta);
      },
      error: (error) => {
        console.error(error);
        this.cargando = false;
      }
    });
  }

  public borrarPlaneta(idPlaneta: number) {
    this.cargando = true;
    this.planetaService.deletePlaneta(idPlaneta).subscribe({
      next: (datos) => {
        console.log("El planeta ha sido borrado ->", datos);
        this.cargando = false;
        this.ngOnInit(); // Para que se vuelvan a cargar todos los datos actualizados
      },
      error: (error) => {
        console.error("Se ha producido un error al borrar el planeta " + idPlaneta, error);
        this.cargando = false;
      }
    });
  }

  public conmutarPlaneta(idPlaneta: number, valorActual: boolean) {
    this.cargando = true;

    // Estos son los atributos parciales que vamos a cambiar en el objeto Planeta
    const cambios = {
      isDestroyed: !valorActual
    };

    this.planetaService.actualizarPlaneta(idPlaneta, cambios).subscribe({
      next: (datos) => {
        this.cargando = false;
        this.ngOnInit(); // Volvemos a actualizar la lista de planetas actualizado con lo que hay en la base de datos de verdad
      },
      error: (error) => {
        console.error("Se ha producido un error al actualizar el planeta " + idPlaneta, error);
        this.cargando = false;
      }
    });
  }

  public crearPlaneta() {
    const planetaNuevo: Planeta = {
      name: "Krypton",
      description: "Planeta de Henry Cavill",
      image: "https://static.wikia.nocookie.net/dcextendeduniverse/images/e/e2/Krypton_-_Man_of_Steel.png/revision/latest?cb=20201114183058&path-prefix=es",
      isDestroyed: true,
      deletedAt: null,
      characters: []
    };
    this.planetaService.nuevoPlaneta(planetaNuevo).subscribe({
      next: (datos) => {
        this.cargando = false;
        this.ngOnInit(); // Volvemos a actualizar la lista de planetas actualizado con lo que hay en la base de datos de verdad
      },
      error: (error) => {
        console.error("Se ha producido un error al guardar el planeta ", planetaNuevo);
        this.cargando = false;
      }

    });
  }


}
