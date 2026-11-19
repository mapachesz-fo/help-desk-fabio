import { Routes } from '@angular/router';
import { requiereRoles, sesionGuard } from './guards/acceso-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then(m => m.Login)
  },
  {
    path: 'sin-acceso',
    canActivate: [sesionGuard],
    loadComponent: () => import('./pages/sin-acceso/sin-acceso').then(m => m.SinAcceso)
  },
  {
    path: 'dashboard',
    canActivate: [sesionGuard],
    loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard)
  },
  {
    path: 'tickets',
    canActivate: [sesionGuard],
    loadComponent: () => import('./pages/tickets/tickets').then(m => m.Tickets)
  },
  {
    path: 'tickets/nuevo',
    canActivate: [sesionGuard],
    loadComponent: () => import('./pages/ticket-form/ticket-form').then(m => m.TicketForm)
  },
  {
    path: 'tickets/editar/:id',
    canActivate: [sesionGuard],
    loadComponent: () => import('./pages/ticket-form/ticket-form').then(m => m.TicketForm)
  },
  {
    path: 'tickets/:id',
    canActivate: [sesionGuard],
    loadComponent: () => import('./pages/ticket-detalle/ticket-detalle').then(m => m.TicketDetalle)
  },
  {
    path: 'usuarios',
    canActivate: [sesionGuard],
    loadComponent: () => import('./pages/usuarios/usuarios').then(m => m.Usuarios)
  },
  {
    path: 'usuarios/nuevo',
    canActivate: [sesionGuard],
    loadComponent: () => import('./pages/usuario-form/usuario-form').then(m => m.UsuarioForm)
  },
  {
    path: 'usuarios/editar/:id',
    canActivate: [sesionGuard],
    loadComponent: () => import('./pages/usuario-form/usuario-form').then(m => m.UsuarioForm)
  },
  {
    path: 'usuarios/:id',
    canActivate: [sesionGuard],
    loadComponent: () => import('./pages/usuario-detalle/usuario-detalle').then(m => m.UsuarioDetalle)
  },
  {
    path: 'kanban',
    canActivate: [requiereRoles('Soporte', 'Administrador')],
    loadComponent: () => import('./pages/kanban/kanban').then(m => m.Kanban)
  },
  {
    path: 'reportes',
    canActivate: [sesionGuard],
    loadComponent: () => import('./pages/reportes/reportes').then(m => m.Reportes)
  },
  {
    path: 'acerca',
    canActivate: [sesionGuard],
    loadComponent: () => import('./pages/acerca/acerca').then(m => m.Acerca)
  },
  {
    path: 'error404',
    loadComponent: () => import('./pages/error404/error404').then(m => m.Error404)
  },
  {
    path: '**',
    redirectTo: 'error404'
  }
];
