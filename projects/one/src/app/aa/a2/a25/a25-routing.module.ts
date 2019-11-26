import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A25Component } from './a25.component';

const routes: Routes = [{ path: '', component: A25Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A25RoutingModule { }
