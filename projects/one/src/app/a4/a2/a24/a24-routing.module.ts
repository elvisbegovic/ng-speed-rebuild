import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A24Component } from './a24.component';

const routes: Routes = [{ path: '', component: A24Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A24RoutingModule { }
