import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0'; 

  constructor(
    private http: HttpClient,
  ) { }

  public buscarPokemons() {
    return this.http.get(`${this.url}`);
  }


  public buscarPokemonId(url: string) {
    return this.http.get(`${url}`);
  }



}
