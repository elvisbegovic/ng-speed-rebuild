import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B38Component } from './b38.component';

const routes: Routes = [{ path: '', component: B38Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B38RoutingModule { }
