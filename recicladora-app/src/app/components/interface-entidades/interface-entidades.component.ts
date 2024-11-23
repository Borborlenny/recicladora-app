import { Component } from '@angular/core';
import { UsuarioJsonService } from '../../services/usuario-json.service';
import { Usuario } from '../../models/Usuario';
import { CommonModule } from '@angular/common';
import {MatCardAvatar, MatCardModule} from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon';
import { MaterialJsonService } from '../../services/material-json.service';
import { HogarJsonService } from '../../services/hogar-json.service';
import { EmpresaJsonService } from '../../services/empresa-json.service';
import { RutaJsonService } from '../../services/ruta-json.service';
import { Hogar } from '../../models/Hogar';
import { Material } from '../../models/Material';
import { Empresa } from '../../models/Empresa';
import { Ruta } from '../../models/Ruta';

@Component({
  selector: 'app-interface-entidades',
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './interface-entidades.component.html',
  styleUrl: './interface-entidades.component.css'
})
export class InterfaceEntidadesComponent {
  titleUsuario="Listado de Usuarios";
  titleHogar="Listado de Hogares";
  titleMaterial="Listado de Materiales";
  titleEmpresa="Listado de Empresas";
  titleRuta="Listado de Rutas";

  usuarios: Usuario[] = [];
  hogares: Hogar[] = [];
  materiales: Material[] = [];
  empresas: Empresa[] = [];
  rutas: Ruta[] = [];

  constructor(
    private miServicioUsuario: UsuarioJsonService, private miServicioHogar: HogarJsonService, private miServicioMaterial: MaterialJsonService,
    private miServicioEmpresa: EmpresaJsonService, private miServicioRuta: RutaJsonService){
  }

  ngOnInit():void{
    this.obtenerUsuarios()
    this.obtenerHogares()
    this.obtenerMateriales()
    this.obtenerEmpresas()
    this.obtenerRutas()
  }

  obtenerUsuarios():void{
      this.miServicioUsuario.obtenerUsuarios().subscribe((data: Usuario[])=>{
        this.usuarios = data;
        console.log(this.usuarios[0]);
      })
  }

  obtenerHogares():void{
    this.miServicioHogar.obtenerHogares().subscribe((data: Hogar[])=>{
      this.hogares = data;
      console.log(this.hogares[0]);
    })
  }

  obtenerMateriales():void{
    this.miServicioMaterial.obtenerMateriales().subscribe((data: Material[])=>{
      this.materiales = data;
      console.log(this.materiales[0]);
    })
  }

  obtenerEmpresas():void{
    this.miServicioEmpresa.obtenerEmpresas().subscribe((data: Empresa[])=>{
      this.empresas = data;
      console.log(this.empresas[0]);
    })
  }

  obtenerRutas():void{
    this.miServicioRuta.obtenerRutas().subscribe((data: Ruta[])=>{
      this.rutas = data;
      console.log(this.rutas[0]);
    })
  }
}
