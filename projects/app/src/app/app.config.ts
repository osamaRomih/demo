import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { DataComponent } from './data/data.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
