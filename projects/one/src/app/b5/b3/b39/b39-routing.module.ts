import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B39Component } from './b39.component';

const routes: Routes = [{ path: '', component: B39Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B39RoutingModule { }
