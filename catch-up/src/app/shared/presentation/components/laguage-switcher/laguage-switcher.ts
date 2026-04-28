import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';

@Component({
  selector: 'app-laguage-switcher',
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle
  ],
  templateUrl: './laguage-switcher.html',
  styleUrl: './laguage-switcher.css',
})
export class LaguageSwitcher {
  currentLanguage='en';
  languages=['en','es'];
  //generate a constructor
  constructor(private translate:TranslateService){
    this.currentLanguage=translate.getCurrentLang()
  }

  //set the string as the language that we use
  useLanguage(lang:string):void{
    this.translate.use(lang);
  }
}
