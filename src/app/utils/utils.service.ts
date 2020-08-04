import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http: HttpClient) { }

  getStartShips(): Observable<any> {
    return this.http.get('https://swapi.dev/api/starships')
    .pipe(tap(() => this.someThing()));
  }

  someThing() {
    console.log('something');
  }
}
