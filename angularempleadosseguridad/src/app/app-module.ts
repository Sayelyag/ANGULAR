import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { Login } from './components/login/login';
import { Perfil } from './components/perfil/perfil';
import { Subordinados } from './components/subordinados/subordinados';

@NgModule({
  declarations: [App, HomeComponent, MenuComponent, Login, Perfil, Subordinados],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration()],
  bootstrap: [App],
})
export class AppModule {}
