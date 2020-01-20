import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B23Component } from './b23.component';

const routes: Routes = [{ path: '', component: B23Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B23RoutingModule { }
