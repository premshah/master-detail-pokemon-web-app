import { Component, OnInit } from '@angular/core';

import { Pokemon } from './pokemon.model';
import { PokemonService } from './pokemon-service';

@Component({
  selector: 'all-list',
  moduleId: module.id,
  templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent implements OnInit {
  pokemon: Pokemon[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    const data = this.pokemonService.list();

    data['pokemon_entries'].forEach((entry) => {
      const pok = new Pokemon();
      pok.name = entry.pokemon_species.name;
      pok.id = entry.entry_number;
      this.pokemon.push(pok);
    });

    console.log(this.pokemon);
  }
}
