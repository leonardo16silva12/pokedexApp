import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowPokemonPageRoutingModule } from './show-pokemon-routing.module';

import { ShowPokemonPage } from './show-pokemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowPokemonPageRoutingModule
  ],
  declarations: [ShowPokemonPage]
})
export class ShowPokemonPageModule {}
