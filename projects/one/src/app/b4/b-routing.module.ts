import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BComponent } from './b.component';

const routes: Routes = [{ path: '', component: BComponent, children: [
    { path: 'b1', loadChildren: () => import('./b1/b1.module').then(m => m.B1Module) },
    { path: 'b2', loadChildren: () => import('./b2/b2.module').then(m => m.B2Module) },
    { path: 'b3', loadChildren: () => import('./b3/b3.module').then(m => m.B3Module) },
    { path: 'b4', loadChildren: () => import('./b4/b4.module').then(m => m.B4Module) },
    { path: 'b5', loadChildren: () => import('./b5/b5.module').then(m => m.B5Module) }
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BRoutingModule { }
