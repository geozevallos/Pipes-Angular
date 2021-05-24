import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

  nombreLower: string = 'jorge zevallos';
  nombreUpper: string = 'JORGE ZEVALLOS';
  nombreCompleto: string = 'jOrGe zeVallOs';

  fecha: Date = new Date();
  

}
