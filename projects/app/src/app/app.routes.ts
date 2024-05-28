import { Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { DataComponent } from './data/data.component';
import { AppComponent } from './app.component';
import { NestComponent } from './data/nested/nested/nest/nest.component';

export const routes: Routes = [
  { path: 'demo', component: DemoComponent },
  {
    path: 'data',
    component: DataComponent,
    children: [{ path: 'nest', component: NestComponent }],
  },
  { path: '', pathMatch: 'full', redirectTo: '/data/nest' },
];
