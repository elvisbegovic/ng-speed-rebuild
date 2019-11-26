import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A12Component } from './a12.component';

const routes: Routes = [{ path: '', component: A12Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A12RoutingModule { }
