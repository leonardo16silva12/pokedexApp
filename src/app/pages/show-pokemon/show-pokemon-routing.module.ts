import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowPokemonPage } from './show-pokemon.page';

const routes: Routes = [
  {
    path: '',
    component: ShowPokemonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowPokemonPageRoutingModule {}
