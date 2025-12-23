import { ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';


import { routes } from './app.routes';
import PresetCustom from './preset-custom';
import { ConfigService } from './core/services/config.service';


// Función para cargar la config desde el Worker
function initConfig(configService: ConfigService) {
  return () => configService.load();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'disabled',
      })
    ),
    provideHttpClient(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: PresetCustom,
         options: {
          darkModeSelector: '.app-dark',      
        },
      },
      ripple: true
    }),
    {
      provide: 'CONFIG_LOADER',
      useFactory: async () => {
        const configService = inject(ConfigService);
        await configService.load();
      }
    }
  ],
};
