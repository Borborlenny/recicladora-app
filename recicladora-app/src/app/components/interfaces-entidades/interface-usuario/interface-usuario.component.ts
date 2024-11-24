import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Usuario } from '../../../models/Usuario';
import { UsuarioJsonService } from '../../../services/usuario-json.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-interface-usuario',
  imports: [CommonModule, MatCardModule, MatIconModule, RouterOutlet, RouterLink],
  templateUrl: './interface-usuario.component.html',
  styleUrl: './interface-usuario.component.css'
})
export class InterfaceUsuarioComponent implements OnInit {
  titleUsuario="Listado de Usuarios";
  usuarios: Usuario[] = [];

  constructor(private miServicioUsuario: UsuarioJsonService) {}

  ngOnInit(): void {
    this.obtenerUsuarios()
  }

  obtenerUsuarios():void{
      this.miServicioUsuario.obtenerUsuarios().subscribe((data: Usuario[])=>{
        this.usuarios = data;
        console.log(this.usuarios[0]);
      })
  }
}
