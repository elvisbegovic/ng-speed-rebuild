import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A28Component } from './a28.component';

const routes: Routes = [{ path: '', component: A28Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A28RoutingModule { }
