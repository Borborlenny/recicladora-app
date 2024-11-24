import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Material } from '../../../models/Material';
import { MaterialJsonService } from '../../../services/material-json.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-interface-material',
  imports: [CommonModule, MatCardModule, MatIconModule, RouterOutlet, RouterLink],
  templateUrl: './interface-material.component.html',
  styleUrl: './interface-material.component.css'
})
export class InterfaceMaterialComponent implements OnInit{
  titleMaterial="Listado de Materiales";
  materiales: Material[] = [];

  constructor(private miServicioMaterial:MaterialJsonService){}

  ngOnInit():void{
    this.obtenerMateriales()
}

  obtenerMateriales():void{
    this.miServicioMaterial.obtenerMateriales().subscribe((data: Material[])=>{
    this.materiales = data;
      console.log(this.materiales[0]);
    })
  }
}
