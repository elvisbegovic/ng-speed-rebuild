import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A27Component } from './a27.component';

const routes: Routes = [{ path: '', component: A27Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A27RoutingModule { }
