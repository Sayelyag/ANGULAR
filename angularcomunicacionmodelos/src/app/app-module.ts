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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
