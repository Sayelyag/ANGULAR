import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HookComponent } from '../components/hookcomponent/hook.component';
import { DeportesComponent } from '../components/deportescomponent/deportes.component';
import { FormsBindingComponent } from '../components/formsbindingcomponent/forms.binding.component';
import { SumarNumerosComponent } from '../components/sumarnumeroscomponent/sumar.numeros.component';
import { MultiplicarNumerosComponent } from '../components/multiplicarnumeroscomponent/multiplicar.numeros.component';
import { MultiplicarNumerosDosComponent } from '../components/multiplicarnumerosdoscomponent/multiplicar.numeros.dos.component';
import { HomeComponent } from './components/home-component/home-component';
import { MusicaComponent } from './components/musica-component/musica-component';
import { CineComponent } from './components/cine-component/cine-component';

@NgModule({
  declarations: [
    App,
    PrimerComponent,
    HookComponent,
    DeportesComponent,
    FormsBindingComponent,
    SumarNumerosComponent,
    MultiplicarNumerosComponent,
    MultiplicarNumerosDosComponent,
    HomeComponent,
    MusicaComponent,
    CineComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
