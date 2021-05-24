import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(pokemones: Pokemon[], orden: string): Pokemon[] {


    switch (orden) {
      case 'nombre':
        return pokemones.sort((a, b) => ( a.nombre > b.nombre) ? 1 : -1)
        
      case 'evolucion':
        return pokemones.sort((a, b) => ( a.evoluciona > b.evoluciona) ? -1 : 1)

      case 'tipo':
        return pokemones.sort((a, b) => ( a.tipo > b.tipo) ? 1 : -1)
        
      default:
        return pokemones;
    }


  }


}
