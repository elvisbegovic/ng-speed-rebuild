import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A44Component } from './a44.component';

const routes: Routes = [{ path: '', component: A44Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A44RoutingModule { }
