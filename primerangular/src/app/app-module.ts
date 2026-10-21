import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HookComponent } from '../components/hookcomponent/hook.component';
import { DeportesComponent } from '../components/deportescomponent/deportes.component';
import { FormsBindingComponent } from '../components/formsbindingcomponent/forms.binding.component';
import { SumarNumerosComponent } from '../components/sumarnumeroscomponent/sumar.numeros.component';

@NgModule({
  declarations: [
    App,
    PrimerComponent,
    HookComponent,
    DeportesComponent,
    FormsBindingComponent,
    SumarNumerosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
