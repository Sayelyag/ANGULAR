import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { PadreCochesComponent } from './components/padre-coches-component/padre-coches-component';
import { HijoCochesComponent } from './components/hijo-coches-component/hijo-coches-component';
import { DeportePadreComponent } from './components/deporte-padre-component/deporte-padre-component';
import { DeporteHijoComponent } from './components/deporte-hijo-component/deporte-hijo-component';
import { PadreNumerosComponent } from './components/padre-numeros-component/padre-numeros-component';
import { HijoNumerosComponent } from './components/hijo-numeros-component/hijo-numeros-component';
import { ComicsSimpleComponent } from './components/comics-simple-component/comics-simple-component';
import { ComicsJsonComponent } from './components/comics-json-component/comics-json-component';
import { ComicsExcelComponent } from './components/comics-excel-component/comics-excel-component';

@NgModule({
  declarations: [
    App,
    ListaProductosComponent,
    HomeComponent,
    MenuComponent,
    PadreCochesComponent,
    HijoCochesComponent,
    DeportePadreComponent,
    DeporteHijoComponent,
    PadreNumerosComponent,
    HijoNumerosComponent,
    ComicsSimpleComponent,
    ComicsJsonComponent,
    ComicsExcelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
