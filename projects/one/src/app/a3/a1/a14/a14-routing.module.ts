import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A14Component } from './a14.component';

const routes: Routes = [{ path: '', component: A14Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A14RoutingModule { }
