import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B36Component } from './b36.component';

const routes: Routes = [{ path: '', component: B36Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B36RoutingModule { }
