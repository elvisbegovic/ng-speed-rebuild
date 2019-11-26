import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A35Component } from './a35.component';

const routes: Routes = [{ path: '', component: A35Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A35RoutingModule { }
