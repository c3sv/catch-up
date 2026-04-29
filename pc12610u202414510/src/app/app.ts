import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LanguageSwitcher} from './shared/presentation/components/language-switcher/language-switcher';
import {Layout} from './shared/presentation/components/layout/layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LanguageSwitcher, Layout],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('pc12610u202414510');
}
