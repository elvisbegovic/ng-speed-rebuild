import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A59Component } from './a59.component';

const routes: Routes = [{ path: '', component: A59Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A59RoutingModule { }
