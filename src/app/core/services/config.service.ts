import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class ConfigService {
  private config: Record<string, string> = {};

  async load(): Promise<void> {
    if (environment.production) {
        console.log('Cargando configuración desde el Worker...');
      const res = await fetch('/api/config');
      this.config = await res.json();
    } else {
      console.log('Cargando configuración local...');
      // Local: usa environment.ts
      this.config = {
        airbnb: environment.social.airbnb,
        bookingcom: environment.social.bookingcom,
        contactEmail: environment.contactEmail,
        facebook: environment.social.facebook,
        instagram: environment.social.instagram,
        phoneNumber: environment.phoneNumber,
        tripadvisor: environment.social.tripadvisor,
        twitter: environment.social.twitter,
        web3formsKey: environment.web3formsKey
      };
    }
  }

  get(key: string): string {
    return this.config[key] ?? '';
  }
}
