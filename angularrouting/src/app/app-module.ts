import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { NotFounfComponent } from './components/not-founf-component/not-founf-component';
import { routing, appRoutingProviders } from './app.routing';
import { HomeComponent } from './components/home-component/home-component';
import { MusicaComponent } from './components/musica-component/musica-component';
import { CineComponent } from './components/cine-component/cine-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { NumeroDobleComponent } from './components/numero-doble-component/numero-doble-component';
import { TablaMultiplicarComponent } from './components/tabla-multiplicar-component/tabla-multiplicar-component';

@NgModule({
  declarations: [
    App,
    NotFounfComponent,
    HomeComponent,
    MusicaComponent,
    CineComponent,
    MenuComponent,
    NumeroDobleComponent,
    TablaMultiplicarComponent,
  ],
  imports: [BrowserModule, routing],
  providers: [provideBrowserGlobalErrorListeners(), appRoutingProviders],
  bootstrap: [App],
})
export class AppModule {}
