import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B5Component } from './b5.component';

const routes: Routes = [{ path: '', component: B5Component, children: [
    { path: 'b51', loadChildren: () => import('./b51/b51.module').then(m => m.B51Module) },
    { path: 'b52', loadChildren: () => import('./b52/b52.module').then(m => m.B52Module) },
    { path: 'b53', loadChildren: () => import('./b53/b53.module').then(m => m.B53Module) },
    { path: 'b54', loadChildren: () => import('./b54/b54.module').then(m => m.B54Module) },
    { path: 'b55', loadChildren: () => import('./b55/b55.module').then(m => m.B55Module) },
    { path: 'b56', loadChildren: () => import('./b56/b56.module').then(m => m.B56Module) },
    { path: 'b57', loadChildren: () => import('./b57/b57.module').then(m => m.B57Module) },
    { path: 'b58', loadChildren: () => import('./b58/b58.module').then(m => m.B58Module) },
    { path: 'b59', loadChildren: () => import('./b59/b59.module').then(m => m.B59Module) }
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B5RoutingModule { }
