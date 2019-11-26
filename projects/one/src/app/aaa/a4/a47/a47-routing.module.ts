import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A47Component } from './a47.component';

const routes: Routes = [{ path: '', component: A47Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A47RoutingModule { }
