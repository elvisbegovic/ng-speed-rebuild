import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A41Component } from './a41.component';

const routes: Routes = [{ path: '', component: A41Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A41RoutingModule { }
