import { NgModule } from '@angular/core';
import { PlantillaFuncionSimpleApiComponent } from './components/plantilla-funcion-simple-api-component/plantilla-funcion-simple-api-component';
import { PlantillaFuncionMultipleComponent } from './components/plantilla-funcion-multiple-component/plantilla-funcion-multiple-component';

@NgModule({
  declarations: [PlantillaFuncionSimpleApiComponent, PlantillaFuncionMultipleComponent],
  exports: [PlantillaFuncionSimpleApiComponent],
})
export class AppModule {}
