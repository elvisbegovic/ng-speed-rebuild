import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B4Component } from './b4.component';

const routes: Routes = [{ path: '', component: B4Component, children: [
    { path: 'b41', loadChildren: () => import('./b41/b41.module').then(m => m.B41Module) },
    { path: 'b42', loadChildren: () => import('./b42/b42.module').then(m => m.B42Module) },
    { path: 'b43', loadChildren: () => import('./b43/b43.module').then(m => m.B43Module) },
    { path: 'b44', loadChildren: () => import('./b44/b44.module').then(m => m.B44Module) },
    { path: 'b45', loadChildren: () => import('./b45/b45.module').then(m => m.B45Module) },
    { path: 'b46', loadChildren: () => import('./b46/b46.module').then(m => m.B46Module) },
    { path: 'b47', loadChildren: () => import('./b47/b47.module').then(m => m.B47Module) },
    { path: 'b48', loadChildren: () => import('./b48/b48.module').then(m => m.B48Module) },
    { path: 'b49', loadChildren: () => import('./b49/b49.module').then(m => m.B49Module) }
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B4RoutingModule { }
