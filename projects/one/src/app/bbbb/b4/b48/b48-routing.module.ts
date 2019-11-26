import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B48Component } from './b48.component';

const routes: Routes = [{ path: '', component: B48Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B48RoutingModule { }
