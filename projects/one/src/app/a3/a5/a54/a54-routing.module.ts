import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A54Component } from './a54.component';

const routes: Routes = [{ path: '', component: A54Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A54RoutingModule { }
