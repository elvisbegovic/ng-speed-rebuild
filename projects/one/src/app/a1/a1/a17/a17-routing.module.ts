import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A17Component } from './a17.component';

const routes: Routes = [{ path: '', component: A17Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A17RoutingModule { }
