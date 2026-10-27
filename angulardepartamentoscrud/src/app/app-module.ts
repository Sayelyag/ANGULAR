import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { ServiceDepartamento } from './services/service.departamento';
import { CreateComponent } from './components/create-component/create-component';

@NgModule({
  declarations: [App, HomeComponent, MenuComponent, CreateComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ServiceDepartamento, provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
