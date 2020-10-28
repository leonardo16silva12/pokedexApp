



// APLICATIVO FEITO POR: CARLOS EDUARDO ARTIOLI E LEONARDO FELIPE DA SILVA //






import { Component } from '@angular/core';
import { url } from 'inspector';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public listaPokemons: any = [];
  public pagina = 1;
  public totalPaginas = 105;
  public url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
  public next: string;
  public previous: string;

  constructor(
    private pokemonService: PokemonService,
  ) { }

  ionViewWillEnter() {
    this.buscarPokemons(1);
  }

  public buscarPokemons(pagina: number) {
    if (pagina <= 0) {
      pagina = 1;
    }
    this.pagina = pagina;

    this.pokemonService.buscarPokemons(this.url).subscribe(dados => {
      this.listaPokemons = [];
      this.next = dados['next'];
      this.previous = dados['previous'];
      let listaApi = dados['results'];
      for (let item of listaApi) {
        this.pokemonService.buscarPokemonId(item.url).subscribe(dadosPokemon => {
          this.listaPokemons.push(dadosPokemon);
        });
      }
    });
  }

  public nextPage() {
    this.url = this.next;
    this.buscarPokemons(this.pagina + 1);
  }

  public previousPage() {
    this.url = this.previous;
    this.buscarPokemons(this.pagina - 1);
  }
}