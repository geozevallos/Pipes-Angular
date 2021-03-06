import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenadosComponent } from './pages/ordenados/ordenados.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { EvolucionaPipe } from './pipes/evoluciona.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';




@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenadosComponent,
    MayusculasPipe,
    EvolucionaPipe,
    OrdenarPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports:[
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenadosComponent,
    
  ]
})
export class VentasModule { }
