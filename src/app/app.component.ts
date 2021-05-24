import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  // title = 'pipesApp';
  // nombre: string = "Jorge z"
  // valor: number = 1500
  // obj = {
  //   nombre: "Jorge"
  // }

  // mostrarNombre(){
  //   console.log(this.nombre);
  //   console.log(this.valor);
    
  // }

  //Configurando primNg
  constructor(private primeNgConfig: PrimeNGConfig){}

ngOnInit(){
  this.primeNgConfig.ripple = true
}


}
