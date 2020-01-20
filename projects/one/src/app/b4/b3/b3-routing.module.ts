import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B3Component } from './b3.component';

const routes: Routes = [{ path: '', component: B3Component, children: [
    { path: 'b31', loadChildren: () => import('./b31/b31.module').then(m => m.B31Module) },
    { path: 'b32', loadChildren: () => import('./b32/b32.module').then(m => m.B32Module) },
    { path: 'b33', loadChildren: () => import('./b33/b33.module').then(m => m.B33Module) },
    { path: 'b34', loadChildren: () => import('./b34/b34.module').then(m => m.B34Module) },
    { path: 'b35', loadChildren: () => import('./b35/b35.module').then(m => m.B35Module) },
    { path: 'b36', loadChildren: () => import('./b36/b36.module').then(m => m.B36Module) },
    { path: 'b37', loadChildren: () => import('./b37/b37.module').then(m => m.B37Module) },
    { path: 'b38', loadChildren: () => import('./b38/b38.module').then(m => m.B38Module) },
    { path: 'b39', loadChildren: () => import('./b39/b39.module').then(m => m.B39Module) }
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B3RoutingModule { }
