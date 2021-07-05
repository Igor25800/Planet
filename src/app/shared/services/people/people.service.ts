import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IPeople } from '../../interfaces/people.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {


  
  
  constructor(
    private http: HttpClient,
  ) {}

  getPeople(id:string): Observable <IPeople> {
   return  this.http.get<IPeople>(id).pipe( map((data: any) => data )  )

  }


}
