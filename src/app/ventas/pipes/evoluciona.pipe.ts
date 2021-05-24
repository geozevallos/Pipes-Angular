import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'evoluciona'
})


export class EvolucionaPipe implements PipeTransform {

    transform(evoluciona: boolean): string{

      return (evoluciona) ? "evoluciona" : "no evoluciona"
    }

}