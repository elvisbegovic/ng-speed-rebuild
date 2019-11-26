import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B57Component } from './b57.component';

const routes: Routes = [{ path: '', component: B57Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B57RoutingModule { }
