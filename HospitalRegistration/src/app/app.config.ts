import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideNativeDateAdapter } from '@angular/material/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './store/auth/auth.reducer';
//import { counterReducer } from './store/auth/auth.reducer';

export const appConfig: ApplicationConfig = {
  
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),

    importProvidersFrom(BsDatepickerModule.forRoot()),
    provideRouter(routes), provideHttpClient(), provideNativeDateAdapter(), provideStore(),provideState({name:'counter',reducer:counterReducer})
  ]
};
