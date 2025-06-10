import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Raw } from '../models/raw.model';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  constructor(private httpClient: HttpClient) {}

  public getPersonajes(): Observable<Raw> {
    return this.httpClient.get<Raw>("https://dragonball-api.com/api/characters?limit=100");
  }


}
