import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A32Component } from './a32.component';

const routes: Routes = [{ path: '', component: A32Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A32RoutingModule { }
