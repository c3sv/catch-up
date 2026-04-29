import {Component, Input} from '@angular/core';
import {
  MatCard, MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardModule,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {Character} from '../../../domain/model/character.entity';
import {TranslatePipe} from '@ngx-translate/core';
import {MatButtonToggle} from '@angular/material/button-toggle';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-character-card',
  imports: [
    MatCardContent,
    MatCardImage,
    MatCardHeader,
    MatCard,
    MatCardTitle,
    TranslatePipe,
    MatCardSubtitle,
    MatCardActions,
    MatButtonToggle,
    MatButton,
    MatIconButton,
    MatIcon
  ],
  templateUrl: './character-card.html',
  styleUrl: './character-card.css',
})
export class CharacterCard {
 @Input() character!: Character;

 share(character: Character):void{
   if(navigator.share){
     navigator.share({
       title: character.name,
       text: `Check out ${character.name} from Rick and Morty`,
       url: character.url
     }).catch(error=>console.log('Error sharin',error));
   }else{
     navigator.clipboard.writeText(character.url);
     alert('Character Url copied to clipboard!');
   }
 }
}
