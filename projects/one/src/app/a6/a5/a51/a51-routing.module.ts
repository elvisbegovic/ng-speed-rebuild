import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A51Component } from './a51.component';

const routes: Routes = [{ path: '', component: A51Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A51RoutingModule { }
