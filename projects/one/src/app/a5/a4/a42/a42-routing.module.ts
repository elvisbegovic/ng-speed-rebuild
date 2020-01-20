import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A42Component } from './a42.component';

const routes: Routes = [{ path: '', component: A42Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A42RoutingModule { }
