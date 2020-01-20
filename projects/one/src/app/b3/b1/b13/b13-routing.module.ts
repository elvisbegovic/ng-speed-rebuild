import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B13Component } from './b13.component';

const routes: Routes = [{ path: '', component: B13Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B13RoutingModule { }
