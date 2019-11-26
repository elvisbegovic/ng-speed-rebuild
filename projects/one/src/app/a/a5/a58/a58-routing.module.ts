import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A58Component } from './a58.component';

const routes: Routes = [{ path: '', component: A58Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A58RoutingModule { }
