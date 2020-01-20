import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A53Component } from './a53.component';

const routes: Routes = [{ path: '', component: A53Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A53RoutingModule { }
