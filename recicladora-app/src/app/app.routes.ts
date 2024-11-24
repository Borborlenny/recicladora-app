import { Routes } from '@angular/router';

export const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },

  {
    path: 'usuario',
    loadComponent: () =>
      import('./components/interfaces-entidades/interface-usuario/interface-usuario.component')
        .then(c => c.InterfaceUsuarioComponent),
  },
  {
    path: 'usuario/gestion-usuario',
    loadComponent: () =>
      import('./components/gestion-entidades/crud-usuario/crud-usuario.component')
        .then(c => c.CrudUsuarioComponent),
  },

  {
    path: 'hogar',
    loadComponent: () =>
      import('./components/interfaces-entidades/interface-hogar/interface-hogar.component')
    .then(c => c.InterfaceHogarComponent)
  },
  {
    path: 'hogar/gestion-hogar',
    loadComponent: () =>
      import('./components/gestion-entidades/crud-hogar/crud-hogar.component')
        .then(c => c.CrudHogarComponent),
  },

  {
    path: 'material',
    loadComponent: () =>
      import('./components/interfaces-entidades/interface-material/interface-material.component')
    .then(c => c.InterfaceMaterialComponent)
  },
  {
    path: 'material/gestion-material',
    loadComponent: () =>
      import('./components/gestion-entidades/crud-material/crud-material.component')
        .then(c => c.CrudMaterialComponent),
  },

  {
    path: 'empresa',
    loadComponent: () =>
      import('./components/interfaces-entidades/interface-empresa/interface-empresa.component')
    .then(c => c.InterfaceEmpresaComponent)
  },
  {
    path: 'empresa/gestion-empresa',
    loadComponent: () =>
      import('./components/gestion-entidades/crud-empresa/crud-empresa.component')
        .then(c => c.CrudEmpresaComponent),
  },

  {
    path: 'ruta',
    loadComponent: () =>
      import('./components/interfaces-entidades/interface-ruta/interface-ruta.component')
    .then(c => c.InterfaceRutaComponent)
  },
  {
    path: 'ruta/gestion-ruta',
    loadComponent: () =>
      import('./components/gestion-entidades/crud-ruta/crud-ruta.component')
        .then(c => c.CrudRutaComponent),
  },
];
