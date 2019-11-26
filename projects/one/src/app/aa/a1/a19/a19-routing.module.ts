import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A19Component } from './a19.component';

const routes: Routes = [{ path: '', component: A19Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A19RoutingModule { }
