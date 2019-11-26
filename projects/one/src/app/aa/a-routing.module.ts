import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AComponent } from './a.component';

const routes: Routes = [
  { path: '', component: AComponent, children: [
      { path: 'a1', loadChildren: () => import('./a1/a1.module').then(m => m.A1Module) },
      { path: 'a2', loadChildren: () => import('./a2/a2.module').then(m => m.A2Module) },
      { path: 'a3', loadChildren: () => import('./a3/a3.module').then(m => m.A3Module) },
      { path: 'a4', loadChildren: () => import('./a4/a4.module').then(m => m.A4Module) },
      { path: 'a5', loadChildren: () => import('./a5/a5.module').then(m => m.A5Module) }
    ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ARoutingModule { }
