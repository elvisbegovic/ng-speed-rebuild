import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A23Component } from './a23.component';

const routes: Routes = [{ path: '', component: A23Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A23RoutingModule { }
