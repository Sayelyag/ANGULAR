import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { Perfil } from './components/perfil/perfil';
import { Subordinados } from './components/subordinados/subordinados';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "perfil", component: Perfil},
  {path: "subordinados", component: Subordinados},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
