import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataIPlanet } from '../../interfaces/planet.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  

  private url: string
  constructor(private http: HttpClient) {
    this.url = `https://swapi.dev/api/planets`
   }

   getPlanets(): Observable<Array <IDataIPlanet>> {
    return this.http.get<any>(this.url).pipe( map((data: any) => data.results ) )
   }
}
