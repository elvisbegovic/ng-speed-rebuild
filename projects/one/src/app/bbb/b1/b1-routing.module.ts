import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B1Component } from './b1.component';

const routes: Routes = [
  { path: '', component: B1Component, children: [
      { path: 'b11', loadChildren: () => import('./b11/b11.module').then(m => m.B11Module) },
      { path: 'b12', loadChildren: () => import('./b12/b12.module').then(m => m.B12Module) },
      { path: 'b13', loadChildren: () => import('./b13/b13.module').then(m => m.B13Module) },
      { path: 'b14', loadChildren: () => import('./b14/b14.module').then(m => m.B14Module) },
      { path: 'b15', loadChildren: () => import('./b15/b15.module').then(m => m.B15Module) },
      { path: 'b16', loadChildren: () => import('./b16/b16.module').then(m => m.B16Module) },
      { path: 'b17', loadChildren: () => import('./b17/b17.module').then(m => m.B17Module) },
      { path: 'b18', loadChildren: () => import('./b18/b18.module').then(m => m.B18Module) },
      { path: 'b19', loadChildren: () => import('./b19/b19.module').then(m => m.B19Module) }
    ] },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B1RoutingModule { }
