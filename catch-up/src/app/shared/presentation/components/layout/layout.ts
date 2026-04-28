import { Component } from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIconButton} from '@angular/material/button';
import {LaguageSwitcher} from '../laguage-switcher/laguage-switcher';
import {Footer} from '../footer/footer';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-layout',
  imports: [
    MatSidenavContainer,
    MatSidenav,
    MatToolbar,
    MatSidenavContent,
    MatIconButton,
    LaguageSwitcher,
    Footer,
    MatIcon
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
