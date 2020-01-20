import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A37Component } from './a37.component';

const routes: Routes = [{ path: '', component: A37Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A37RoutingModule { }
