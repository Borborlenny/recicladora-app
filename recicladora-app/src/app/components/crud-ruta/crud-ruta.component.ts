import { Component } from '@angular/core';
import { RutaJsonService } from '../../services/ruta-json.service';
import { Ruta } from '../../models/Ruta';

@Component({
  selector: 'app-crud-ruta',
  imports: [],
  templateUrl: './crud-ruta.component.html',
  styleUrl: './crud-ruta.component.css'
})
export class CrudRutaComponent {
  constructor(private rutaService: RutaJsonService){
  
  }
   ngOnInit(): void {
     this.obtenerRuta()
   }
   obtenerRuta(){
     this.rutaService.obtenerRutas().subscribe((data: Ruta[])=>{
         console.log(data)
     })
   }
}
