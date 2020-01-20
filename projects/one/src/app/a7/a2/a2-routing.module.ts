import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A2Component } from './a2.component';

const routes: Routes = [{ path: '', component: A2Component, children: [
    { path: 'a21', loadChildren: () => import('./a21/a21.module').then(m => m.A21Module) },
    { path: 'a22', loadChildren: () => import('./a22/a22.module').then(m => m.A22Module) },
    { path: 'a23', loadChildren: () => import('./a23/a23.module').then(m => m.A23Module) },
    { path: 'a24', loadChildren: () => import('./a24/a24.module').then(m => m.A24Module) },
    { path: 'a25', loadChildren: () => import('./a25/a25.module').then(m => m.A25Module) },
    { path: 'a26', loadChildren: () => import('./a26/a26.module').then(m => m.A26Module) },
    { path: 'a27', loadChildren: () => import('./a27/a27.module').then(m => m.A27Module) },
    { path: 'a28', loadChildren: () => import('./a28/a28.module').then(m => m.A28Module) },
    { path: 'a29', loadChildren: () => import('./a29/a29.module').then(m => m.A29Module) }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A2RoutingModule { }
