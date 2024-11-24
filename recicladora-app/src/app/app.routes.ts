import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/interface-entidades/interface-entidades.component')
    .then(c => c.InterfaceEntidadesComponent)
  },
  {
    path: 'usuario',
    loadComponent: () =>
      import('./components/gestion-entidades/crud-usuario/crud-usuario.component')
    .then(c => c.CrudUsuarioComponent)
  },
  {
    path: 'hogar',
    loadComponent: () =>
      import('./components/gestion-entidades/crud-hogar/crud-hogar.component')
    .then(c => c.CrudHogarComponent)
  },
  {
    path: 'material',
    loadComponent: () =>
      import('./components/gestion-entidades/crud-material/crud-material.component')
    .then(c => c.CrudMaterialComponent)
  },
  {
    path: 'empresa',
    loadComponent: () =>
      import('./components/gestion-entidades/crud-empresa/crud-empresa.component')
    .then(c => c.CrudEmpresaComponent)
  },
  {
    path: 'ruta',
    loadComponent: () =>
      import('./components/gestion-entidades/crud-ruta/crud-ruta.component')
    .then(c => c.CrudRutaComponent)
  },
];
