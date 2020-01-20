import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B59Component } from './b59.component';

const routes: Routes = [{ path: '', component: B59Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B59RoutingModule { }
