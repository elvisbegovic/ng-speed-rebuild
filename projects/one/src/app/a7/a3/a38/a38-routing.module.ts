import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A38Component } from './a38.component';

const routes: Routes = [{ path: '', component: A38Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A38RoutingModule { }
