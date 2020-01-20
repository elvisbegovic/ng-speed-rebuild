import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A29Component } from './a29.component';

const routes: Routes = [{ path: '', component: A29Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A29RoutingModule { }
