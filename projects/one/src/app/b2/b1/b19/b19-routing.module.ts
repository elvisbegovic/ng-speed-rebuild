import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B19Component } from './b19.component';

const routes: Routes = [{ path: '', component: B19Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B19RoutingModule { }
