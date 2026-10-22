import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home-component/home-component';
import { MusicaComponent } from './components/musica-component/musica-component';
import { CineComponent } from './components/cine-component/cine-component';
import { NumeroDobleComponent } from './components/numero-doble-component/numero-doble-component';
import { TablaMultiplicarComponent } from './components/tabla-multiplicar-component/tabla-multiplicar-component';


const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "cine", component: CineComponent},
  {path: "musica", component: MusicaComponent},
  {path: "numero-doble", component: NumeroDobleComponent},
  {path: "numero-doble/:numero", component: NumeroDobleComponent},
  {path: "tabla-multiplicar/:numero", component: TablaMultiplicarComponent},
  {path: "**", component: HomeComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
