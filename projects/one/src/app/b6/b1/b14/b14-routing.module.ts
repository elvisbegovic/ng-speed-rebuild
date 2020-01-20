import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B14Component } from './b14.component';

const routes: Routes = [{ path: '', component: B14Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B14RoutingModule { }
