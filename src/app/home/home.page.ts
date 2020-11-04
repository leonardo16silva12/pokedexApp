



// APLICATIVO FEITO POR: CARLOS EDUARDO ARTIOLI E LEONARDO FELIPE DA SILVA //






import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public listaPokemonsApi = [];
  public listaPokemonsExibir = [];

  public pagina = 1;
  public totalPaginas = 105;

  public next: string;
  public previous: string;

  constructor(
    private pokemonService: PokemonService,
  ) {
    this.buscarPokemons();
   }

  ionViewWillEnter() {
    this.buscarPokemons();
  }

  public async buscarPokemons() {

    await this.pokemonService.buscarPokemons().subscribe(dados => {

      this.listaPokemonsApi = [];

      this.next = dados['next'];

      this.previous = dados['previous'];

      let listaApi = dados['results'];

      for (let item of listaApi) {

        this.pokemonService.buscarPokemonId(item.url).subscribe(dadosPokemon => {
          this.listaPokemonsApi.push(dadosPokemon);

          this.ordenarLista();

        });
      }
    });
  }

  public ordenarLista() {

    this.listaPokemonsApi.sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      }
      if(a.id < b.id) {
        return -1;
      }

      return 0;
    });
    this.listaPokemonsExibir = this.listaPokemonsApi;
  }

  public paginacao(url, movimento) {
    this.pagina = this.pagina + movimento;

    this.pokemonService.url = url;

    this.buscarPokemons();
  }
}