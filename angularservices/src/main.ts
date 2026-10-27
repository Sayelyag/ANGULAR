import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { App } from './app/app';
import { ComicsComponent } from './app/components/comics-component/comics-component';
import { PersonasApiComponent } from './app/components/personas-api-component/personas-api-component';
import { CochesApiComponent } from './app/components/coches-api-component/coches-api-component';
import { PlantillaFuncionSimpleApiComponent } from './app/components/plantilla-funcion-simple-api-component/plantilla-funcion-simple-api-component';

const routes: Routes = [
  { path: '', component: PersonasApiComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'personas', component: PersonasApiComponent },
  { path: 'coches', component: CochesApiComponent },
  { path: 'plantilla', component: PlantillaFuncionSimpleApiComponent },
];

bootstrapApplication(App, {
  providers: [provideRouter(routes), provideHttpClient()],
}).catch((err) => console.error(err));
