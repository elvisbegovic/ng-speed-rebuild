import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A3Component } from './a3.component';

const routes: Routes = [{ path: '', component: A3Component, children: [
    { path: 'a31', loadChildren: () => import('./a31/a31.module').then(m => m.A31Module) },
    { path: 'a32', loadChildren: () => import('./a32/a32.module').then(m => m.A32Module) },
    { path: 'a33', loadChildren: () => import('./a33/a33.module').then(m => m.A33Module) },
    { path: 'a34', loadChildren: () => import('./a34/a34.module').then(m => m.A34Module) },
    { path: 'a35', loadChildren: () => import('./a35/a35.module').then(m => m.A35Module) },
    { path: 'a36', loadChildren: () => import('./a36/a36.module').then(m => m.A36Module) },
    { path: 'a37', loadChildren: () => import('./a37/a37.module').then(m => m.A37Module) },
    { path: 'a38', loadChildren: () => import('./a38/a38.module').then(m => m.A38Module) },
    { path: 'a39', loadChildren: () => import('./a39/a39.module').then(m => m.A39Module) }
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A3RoutingModule { }
