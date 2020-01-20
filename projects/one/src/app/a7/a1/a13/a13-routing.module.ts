import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A13Component } from './a13.component';

const routes: Routes = [{ path: '', component: A13Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A13RoutingModule { }
