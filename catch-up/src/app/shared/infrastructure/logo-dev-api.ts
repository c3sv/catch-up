import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LogoDevApi {
  baseUrl=environment.logoProvideApiBaseUrl;
  apKey=environment.logoProviderPublishablekey;
  constructor() {
  }

  // TODO: Implement getUrlToLogo
  //getUrlToLogo(source:Source)
}
