import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A55Component } from './a55.component';

const routes: Routes = [{ path: '', component: A55Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A55RoutingModule { }
