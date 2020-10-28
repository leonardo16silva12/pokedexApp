import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  private urlP = '';

  constructor(
    private http: HttpClient,
  ) {}


  public buscarPokemons(url: string) {
    return this.http.get(url);
  }



  public buscarPokemonId(url: string) {
    return this.http.get(`${url}`);
  }



}
