import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public listaPokemons: any = [];
  public next: string;
  public previous: string;
  public totalPokemons: number;
  public pagina = 1;
  public totalPaginas = 1;

  constructor(
    private pokemonService: PokemonService,
  ) {}

  ionViewWillEnter() {
    this.buscarPokemons(1);
  }

  public buscarPokemons(pagina: number) {
    if(pagina <= 0) {
      pagina = 1;
    }
    this.pagina = pagina;

    this.pokemonService.buscarPokemons().subscribe(dados => {
      this.listaPokemons = [];

      this.next = dados['next'];
      console.log(this.next);

      this.previous = dados['previous'];
      console.log(this.previous);

      this.totalPokemons = dados['count'];
      console.log(this.totalPokemons);

      let listaApi = dados['results'];
      console.log(listaApi);

      for (let item of listaApi) {
        this.pokemonService.buscarPokemonId(item.url).subscribe(dadosPokemon => {
          this.listaPokemons.push(dadosPokemon);

        });
      }
    });
  }

}