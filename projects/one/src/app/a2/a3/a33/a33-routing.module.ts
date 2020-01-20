import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A33Component } from './a33.component';

const routes: Routes = [{ path: '', component: A33Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A33RoutingModule { }
