import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B27Component } from './b27.component';

const routes: Routes = [{ path: '', component: B27Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B27RoutingModule { }
