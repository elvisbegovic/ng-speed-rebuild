import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A1Component } from './a1.component';

const routes: Routes = [
  { path: '', component: A1Component, children: [
      { path: 'a11', loadChildren: () => import('./a11/a11.module').then(m => m.A11Module) },
      { path: 'a12', loadChildren: () => import('./a12/a12.module').then(m => m.A12Module) },
      { path: 'a13', loadChildren: () => import('./a13/a13.module').then(m => m.A13Module) },
      { path: 'a14', loadChildren: () => import('./a14/a14.module').then(m => m.A14Module) },
      { path: 'a15', loadChildren: () => import('./a15/a15.module').then(m => m.A15Module) },
      { path: 'a16', loadChildren: () => import('./a16/a16.module').then(m => m.A16Module) },
      { path: 'a17', loadChildren: () => import('./a17/a17.module').then(m => m.A17Module) },
      { path: 'a18', loadChildren: () => import('./a18/a18.module').then(m => m.A18Module) },
      { path: 'a19', loadChildren: () => import('./a19/a19.module').then(m => m.A19Module) }
    ] },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A1RoutingModule { }
