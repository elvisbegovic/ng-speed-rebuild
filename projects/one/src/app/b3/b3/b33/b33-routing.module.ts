import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B33Component } from './b33.component';

const routes: Routes = [{ path: '', component: B33Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B33RoutingModule { }
