import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RawPersonaje } from '../models/raw-personaje.model';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  constructor(private httpClient: HttpClient) {}

  public getPersonajes(): Observable<RawPersonaje> {
    return this.httpClient.get<RawPersonaje>("https://dragonball-api.com/api/characters?limit=100");
  }


}
