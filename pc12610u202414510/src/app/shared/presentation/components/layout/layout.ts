import { Component } from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';
import {Footer} from '../footer/footer';
import {MatIcon} from '@angular/material/icon';
import {LanguageSwitcher} from '../language-switcher/language-switcher';
import {TranslatePipe} from '@ngx-translate/core';
import {CharacterList} from '../../../../characters/presentation/components/character-list/character-list';

@Component({
  selector: 'app-layout',
  imports: [
    MatSidenavContainer,
    MatSidenav,
    MatToolbar,
    MatSidenavContent,
    Footer,
    MatIcon,
    LanguageSwitcher,
    TranslatePipe,
    CharacterList
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
