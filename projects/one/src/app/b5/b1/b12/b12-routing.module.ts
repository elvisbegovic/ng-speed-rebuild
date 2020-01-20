import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B12Component } from './b12.component';

const routes: Routes = [{ path: '', component: B12Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B12RoutingModule { }
