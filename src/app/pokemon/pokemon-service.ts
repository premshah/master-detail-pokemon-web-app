import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
// import { Http, Headers, Response } from "@angular/http";
import 'rxjs/add/operator/toPromise';

import { Pokemon } from './pokemon.model';

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) { }

  list() {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const allPokemon = [];
    try {
      return this.http.get('http://pokeapi.co/api/v2/pokedex/2/', {
        headers: headers
      }).subscribe(data => {
        console.log(data);
      });
    } catch (e) {
      this.handleError(e);
    }
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
  }
}
