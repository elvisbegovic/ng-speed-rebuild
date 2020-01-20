import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B47Component } from './b47.component';

const routes: Routes = [{ path: '', component: B47Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B47RoutingModule { }
