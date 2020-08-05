import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { Ship } from './ship';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http: HttpClient) { }

  getStartShips(): Observable<void | any[]> {
    return this.http.get('https://swapi.dev/api/starships')
    .pipe(
      map((ships: any[]) => this.mapShips(ships)),
      tap(() => this.someThing())
    );
  }

  someThing() {
    console.log('something');
  }

  mapShips(ships: any[]) {
    return ships ? ships.map( (ship: Ship) => ({
      ...ship,
      completeName: `${ship.name} - ${ship.model}`
    })) : [];
  }
}
