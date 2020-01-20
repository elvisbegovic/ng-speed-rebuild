import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A34Component } from './a34.component';

const routes: Routes = [{ path: '', component: A34Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A34RoutingModule { }
