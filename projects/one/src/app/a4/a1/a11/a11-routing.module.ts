import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A11Component } from './a11.component';

const routes: Routes = [{ path: '', component: A11Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A11RoutingModule { }
