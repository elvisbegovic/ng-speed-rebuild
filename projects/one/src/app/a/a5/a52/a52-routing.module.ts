import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A52Component } from './a52.component';

const routes: Routes = [{ path: '', component: A52Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A52RoutingModule { }
