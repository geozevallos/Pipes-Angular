import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  // i18nselect
 nombre: string = 'Yanet'
 genero: string = 'femenino'

 invitacionMapa = {
   'masculino': 'invitarlo',
   'femenino': 'invitarla'
 }

 //i18nplural
 distritos: string[] = ['Breña', 'Los Olivos', 'Ate', 'Surco'];
 distritosMapa = {
   '=0': 'No hay ningún distrito seleccionado',
   '=1': 'Hay 1 distrito seleccionado',
   'other': 'Hay # distritos seleccionados'
 }


 borrarDistrito(){
   this.distritos.pop()
 }

 cambiarNombre(){
   this.nombre = "Jorge"
   this.genero = "masculino"
 }


//KeyValuePipe

persona = {
  nombre: 'Jorge',
  edad: 24,
  direccion: 'Lima, Perú'
}


//JsonPipe
Pokemon = [
  {
    nombre: 'Pikachu',
    evoluciona: true
  },
  {
    nombre: "sableye",
    evoluciona: false
  },
  {
    nombre: "Jynx",
    evoluciona: false
  }
]


//Async pipe

miObservable = interval(1000); // Va emitir 0, 1, 2

valorPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('LLegó la data')
  }, 3500)
})


}
