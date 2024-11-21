import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CrudUsuarioComponent } from './components/crud-usuario/crud-usuario.component';
import { CrudMaterialComponent } from './components/crud-material/crud-material.component';
import { CrudEmpresaComponent } from './components/crud-empresa/crud-empresa.component';
import { CrudRutaComponent } from './components/crud-ruta/crud-ruta.component';
import { CrudHogarComponent } from './components/crud-hogar/crud-hogar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,CrudUsuarioComponent, CrudMaterialComponent, CrudEmpresaComponent, CrudRutaComponent,CrudHogarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recicladora-app';
}
