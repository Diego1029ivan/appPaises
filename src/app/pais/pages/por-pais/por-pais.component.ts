import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino:string = 'Hola mundo';
  hayError: boolean = false;
  paises : Country[] =[];

  constructor(private paisService:PaisService){}
  buscar(termino:string){
    this.hayError=false;
    this.termino=termino;
    //console.log(this.termino)
    this.paisService.buscarPais(termino)
      .subscribe({
        next:(paises)=>{
          //paises[0].languages
          console.log(paises);
          this.paises=paises
          },
        error:(err) => {
          this.hayError=true;
          this.paises=[];
        }
      }
      //(respuesta)=>{
      //   console.log(respuesta)
      // },(err)=>{
      //   console.log('error');
      //   console.info(err);
      // }
      )
  }

  sugerencias(termino:string){
    this.hayError = false;
  }

}
