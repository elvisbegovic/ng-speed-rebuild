import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A56Component } from './a56.component';

const routes: Routes = [{ path: '', component: A56Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A56RoutingModule { }
