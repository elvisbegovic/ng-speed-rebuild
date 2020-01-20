import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A26Component } from './a26.component';

const routes: Routes = [{ path: '', component: A26Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A26RoutingModule { }
