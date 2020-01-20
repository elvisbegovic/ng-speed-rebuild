import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A45Component } from './a45.component';

const routes: Routes = [{ path: '', component: A45Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A45RoutingModule { }
