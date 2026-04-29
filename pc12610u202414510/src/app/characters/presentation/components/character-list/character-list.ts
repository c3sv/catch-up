import {Component, inject} from '@angular/core';
import {CharactersStore} from '../../../application/characters.store';
import {CharacterCard} from '../character-card/character-card';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-character-list',
  imports: [
    CharacterCard,
    MatProgressSpinner,
    TranslatePipe
  ],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css',
})
export class CharacterList {
  protected characterService=inject(CharactersStore);
  ngOnInit() {
    this.characterService.fetchCharacters();
  }
}
