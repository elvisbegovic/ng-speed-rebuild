import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A36Component } from './a36.component';

const routes: Routes = [{ path: '', component: A36Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A36RoutingModule { }
