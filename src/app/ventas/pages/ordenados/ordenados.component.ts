import { Component } from '@angular/core';
import { Pokemon, Tipo } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenados',
  templateUrl: './ordenados.component.html',
  styles: [
  ]
})
export class OrdenadosComponent  {

  enMayuscula: boolean = true;

  ordenarPor: string = '';

  pokemones : Pokemon[] = [
    {
      nombre: "Pidgey",
      evoluciona: true,
      tipo: Tipo.volador
    },
    {
      nombre: "Heracross",
      evoluciona: false,
      tipo: Tipo.lucha
    },
    {
      nombre: "Kakuna",
      evoluciona: true,
      tipo: Tipo.bicho
    },
    {
      nombre: "Pikachu",
      evoluciona: true,
      tipo: Tipo.eléctrico
    },
    {
      nombre: "Snorlax",
      evoluciona: false,
      tipo: Tipo.normal
    },
  ]

  toggleMay(){
    this.enMayuscula = !this.enMayuscula
  }

  cambiarOrden(valor:string){
    this.ordenarPor = valor;

  }

}
