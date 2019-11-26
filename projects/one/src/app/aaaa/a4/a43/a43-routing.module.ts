import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A43Component } from './a43.component';

const routes: Routes = [{ path: '', component: A43Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A43RoutingModule { }
