import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B52Component } from './b52.component';

const routes: Routes = [{ path: '', component: B52Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B52RoutingModule { }
