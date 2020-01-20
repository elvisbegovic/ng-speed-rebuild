import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A4Component } from './a4.component';

const routes: Routes = [{ path: '', component: A4Component, children: [
    { path: 'a41', loadChildren: () => import('./a41/a41.module').then(m => m.A41Module) },
    { path: 'a42', loadChildren: () => import('./a42/a42.module').then(m => m.A42Module) },
    { path: 'a43', loadChildren: () => import('./a43/a43.module').then(m => m.A43Module) },
    { path: 'a44', loadChildren: () => import('./a44/a44.module').then(m => m.A44Module) },
    { path: 'a45', loadChildren: () => import('./a45/a45.module').then(m => m.A45Module) },
    { path: 'a46', loadChildren: () => import('./a46/a46.module').then(m => m.A46Module) },
    { path: 'a47', loadChildren: () => import('./a47/a47.module').then(m => m.A47Module) },
    { path: 'a48', loadChildren: () => import('./a48/a48.module').then(m => m.A48Module) },
    { path: 'a49', loadChildren: () => import('./a49/a49.module').then(m => m.A49Module) }
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A4RoutingModule { }
