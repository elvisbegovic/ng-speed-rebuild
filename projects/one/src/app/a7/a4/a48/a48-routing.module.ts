import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A48Component } from './a48.component';

const routes: Routes = [{ path: '', component: A48Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A48RoutingModule { }
