import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B56Component } from './b56.component';

const routes: Routes = [{ path: '', component: B56Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B56RoutingModule { }
