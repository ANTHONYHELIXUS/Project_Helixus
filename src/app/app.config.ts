import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  
  providers: [
<<<<<<< HEAD
    provideRouter(routes),provideHttpClient(), provideAnimationsAsync(), provideAnimationsAsync()
=======
    provideRouter(routes),provideHttpClient(), provideAnimationsAsync()
>>>>>>> 63c742afb1bf43bd307171ada19daf1701cca903
  ]
};
