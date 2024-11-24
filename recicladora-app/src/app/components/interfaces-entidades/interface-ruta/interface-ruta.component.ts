import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Ruta } from '../../../models/Ruta';
import { RutaJsonService } from '../../../services/ruta-json.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-interface-ruta',
  imports: [CommonModule, MatCardModule, MatIconModule, RouterOutlet, RouterLink],
  templateUrl: './interface-ruta.component.html',
  styleUrl: './interface-ruta.component.css'
})
export class InterfaceRutaComponent implements OnInit{
    titleRuta="Listado de Rutas";
    rutas: Ruta[] = [];

  constructor(private miServicioRuta:RutaJsonService){}

    ngOnInit():void{
      this.obtenerRutas()
    }
  obtenerRutas():void{
      this.miServicioRuta.obtenerRutas().subscribe((data: Ruta[])=>{
        this.rutas = data;
        console.log(this.rutas[0]);
      })
    }
}
