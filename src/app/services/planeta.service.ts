import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RawPlaneta } from '../models/raw-planeta.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetaService {

  constructor(private httpClient: HttpClient) { }

  public getPlanetas(): Observable<RawPlaneta> {
    return this.httpClient.get<RawPlaneta>("https://dragonball-api.com/api/planets?limit=100");
  }
}
