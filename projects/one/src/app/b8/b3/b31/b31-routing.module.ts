import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B31Component } from './b31.component';

const routes: Routes = [{ path: '', component: B31Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B31RoutingModule { }
