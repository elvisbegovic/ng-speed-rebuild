import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B53Component } from './b53.component';

const routes: Routes = [{ path: '', component: B53Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B53RoutingModule { }
