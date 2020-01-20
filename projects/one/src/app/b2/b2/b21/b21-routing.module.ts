import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B21Component } from './b21.component';

const routes: Routes = [{ path: '', component: B21Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B21RoutingModule { }
