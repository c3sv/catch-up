import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LogoDevApi {
  baseUrl=environment.logoProvideApiBaseUrl;
  apiKey=environment.logoProviderPublishablekey;
  constructor() {
  }

  // TODO: Implement getUrlToLogo getUrlToLogo(source:Source)
  getUrlToLogo(domain:string):string {
    return `${this.baseUrl}${new URL(domain).hostname}?token=${this.apiKey}`;
  }
}
