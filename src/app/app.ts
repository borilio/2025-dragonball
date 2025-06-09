import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecera } from "./components/cabecera/cabecera";
import { Cuerpo } from "./components/cuerpo/cuerpo";
import { Pie } from "./components/pie/pie";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cabecera, Cuerpo, Pie],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'dragonball';
}
