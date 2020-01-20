import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B2Component } from './b2.component';

const routes: Routes = [
  { path: '', component: B2Component, children: [
      { path: 'b21', loadChildren: () => import('./b21/b21.module').then(m => m.B21Module) },
      { path: 'b22', loadChildren: () => import('./b22/b22.module').then(m => m.B22Module) },
      { path: 'b23', loadChildren: () => import('./b23/b23.module').then(m => m.B23Module) },
      { path: 'b24', loadChildren: () => import('./b24/b24.module').then(m => m.B24Module) },
      { path: 'b25', loadChildren: () => import('./b25/b25.module').then(m => m.B25Module) },
      { path: 'b26', loadChildren: () => import('./b26/b26.module').then(m => m.B26Module) },
      { path: 'b27', loadChildren: () => import('./b27/b27.module').then(m => m.B27Module) },
      { path: 'b28', loadChildren: () => import('./b28/b28.module').then(m => m.B28Module) },
      { path: 'b29', loadChildren: () => import('./b29/b29.module').then(m => m.B29Module) }
    ] },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B2RoutingModule { }
