import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A39Component } from './a39.component';

const routes: Routes = [{ path: '', component: A39Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A39RoutingModule { }
