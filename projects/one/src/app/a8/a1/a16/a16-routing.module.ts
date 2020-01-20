import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A16Component } from './a16.component';

const routes: Routes = [{ path: '', component: A16Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A16RoutingModule { }
