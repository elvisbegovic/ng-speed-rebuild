import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B45Component } from './b45.component';

const routes: Routes = [{ path: '', component: B45Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B45RoutingModule { }
