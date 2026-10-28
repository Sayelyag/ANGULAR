import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './components/comics-component/comics-component';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { CochesApiComponent } from './components/coches-api-component/coches-api-component';
import { PlantillaFuncionSimpleApiComponent } from './components/plantilla-funcion-simple-api-component/plantilla-funcion-simple-api-component';
import { PlantillaFuncionMultipleComponent } from './components/plantilla-funcion-multiple-component/plantilla-funcion-multiple-component';

const routes: Routes = [
  {path: '', component: PersonasApiComponent},
  {path: 'comics', component: ComicsComponent},
  {path: 'personas', component: PersonasApiComponent},
  {path: 'coches', component: CochesApiComponent},
  {path: 'plantilla', component: PlantillaFuncionSimpleApiComponent},
  {path: 'plantillasimple', component: PlantillaFuncionSimpleApiComponent},
  {path: "plantillamultiple", component: PlantillaFuncionMultipleComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
