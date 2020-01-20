import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A15Component } from './a15.component';

const routes: Routes = [{ path: '', component: A15Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A15RoutingModule { }
