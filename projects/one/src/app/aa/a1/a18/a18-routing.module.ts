import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A18Component } from './a18.component';

const routes: Routes = [{ path: '', component: A18Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A18RoutingModule { }
