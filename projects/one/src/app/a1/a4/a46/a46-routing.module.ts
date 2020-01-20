import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A46Component } from './a46.component';

const routes: Routes = [{ path: '', component: A46Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A46RoutingModule { }
