import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A31Component } from './a31.component';

const routes: Routes = [{ path: '', component: A31Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A31RoutingModule { }
