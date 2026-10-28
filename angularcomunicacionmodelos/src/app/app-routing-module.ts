import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { PadreCochesComponent } from './components/padre-coches-component/padre-coches-component';
import { DeportePadreComponent } from './components/deporte-padre-component/deporte-padre-component';
import { PadreNumerosComponent } from './components/padre-numeros-component/padre-numeros-component';
import { ComicsSimpleComponent } from './components/comics-simple-component/comics-simple-component';
import { ComicsJsonComponent } from './components/comics-json-component/comics-json-component';
import { ComicsExcelComponent } from './components/comics-excel-component/comics-excel-component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "listaproductos", component: ListaProductosComponent},
  {path: "coches", component: PadreCochesComponent},
  {path: "deportes", component: DeportePadreComponent},
  {path: "numeros", component: PadreNumerosComponent},
  {path: "comics", component: ComicsSimpleComponent},
  {path: "comicsJson", component: ComicsJsonComponent},
  {path: "comicsExcel", component: ComicsExcelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
