import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planeta } from '../models/planeta.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetaService {
  private url: string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public getPlanetas(): Observable<Planeta[]> {
    return this.httpClient.get<Planeta[]>(`${this.url}/planetas`);
  }

  public getPlaneta(id:number): Observable<Planeta> {
    return this.httpClient.get<Planeta>(`${this.url}/planetas/${id}`);
  }

  public deletePlaneta(id: number): Observable<Planeta> {
    return this.httpClient.delete<Planeta>(`${this.url}/planetas/${id}`);
  }

  public actualizarPlaneta(id: number, cambios: Partial<Planeta>) {
    return this.httpClient.patch<Planeta>(`${this.url}/planetas/${id}`, cambios);
  }

  public nuevoPlaneta(planetaNuevo: Planeta) : Observable<Planeta> {
    return this.httpClient.post<Planeta>(`${this.url}/planetas`, planetaNuevo);
  }


}
