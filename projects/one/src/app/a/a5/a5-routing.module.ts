import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A5Component } from './a5.component';

const routes: Routes = [{ path: '', component: A5Component, children: [
    { path: 'a51', loadChildren: () => import('./a51/a51.module').then(m => m.A51Module) },
    { path: 'a52', loadChildren: () => import('./a52/a52.module').then(m => m.A52Module) },
    { path: 'a53', loadChildren: () => import('./a53/a53.module').then(m => m.A53Module) },
    { path: 'a54', loadChildren: () => import('./a54/a54.module').then(m => m.A54Module) },
    { path: 'a55', loadChildren: () => import('./a55/a55.module').then(m => m.A55Module) },
    { path: 'a56', loadChildren: () => import('./a56/a56.module').then(m => m.A56Module) },
    { path: 'a57', loadChildren: () => import('./a57/a57.module').then(m => m.A57Module) },
    { path: 'a58', loadChildren: () => import('./a58/a58.module').then(m => m.A58Module) },
    { path: 'a59', loadChildren: () => import('./a59/a59.module').then(m => m.A59Module) }
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A5RoutingModule { }
