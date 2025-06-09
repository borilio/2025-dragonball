import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ListadoPersonajes } from './components/listado-personajes/listado-personajes';
import { ListadoPlanetas } from './components/listado-planetas/listado-planetas';

export const routes: Routes = [
    {path: "", component: Home, pathMatch: "full"},
    {path: "personajes", component: ListadoPersonajes},
    {path: "planetas", component: ListadoPlanetas},
    {path: "**", redirectTo: ""}
];
