import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B15Component } from './b15.component';

const routes: Routes = [{ path: '', component: B15Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B15RoutingModule { }
