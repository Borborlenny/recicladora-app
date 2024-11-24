import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Empresa } from '../../../models/Empresa';
import { EmpresaJsonService } from '../../../services/empresa-json.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-interface-empresa',
  imports: [CommonModule, MatCardModule, MatIconModule, RouterOutlet, RouterLink],
  templateUrl: './interface-empresa.component.html',
  styleUrl: './interface-empresa.component.css'
})
export class InterfaceEmpresaComponent implements OnInit{
  titleEmpresa="Listado de Empresas";
  empresas: Empresa[] = [];

constructor(private miServicioEmpresa: EmpresaJsonService){}

  ngOnInit():void{
    this.obtenerEmpresas()
  }

  obtenerEmpresas():void{
    this.miServicioEmpresa.obtenerEmpresas().subscribe((data: Empresa[])=>{
      this.empresas = data;
      console.log(this.empresas[0]);
    })
  }
}
