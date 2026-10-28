import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ComicsComponent } from './components/comics-component/comics-component';
import { provideHttpClient } from '@angular/common/http';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { CochesApiComponent } from './components/coches-api-component/coches-api-component';
import { FormsModule } from '@angular/forms';
import { PlantillaFuncionSimpleApiComponent } from './components/plantilla-funcion-simple-api-component/plantilla-funcion-simple-api-component';
import { ServicePlantilla } from './service/service.plantilla';
import { PlantillaFuncionMultipleComponent } from './components/plantilla-funcion-multiple-component/plantilla-funcion-multiple-component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ComicsComponent,
    PersonasApiComponent,
    MenuComponent,
    CochesApiComponent,
    PlantillaFuncionSimpleApiComponent,
    PlantillaFuncionMultipleComponent,
  ],
  providers: [
    ServicePlantilla,
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
  ],
})
export class AppModule {}
