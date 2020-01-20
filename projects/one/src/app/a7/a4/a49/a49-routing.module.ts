import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A49Component } from './a49.component';

const routes: Routes = [{ path: '', component: A49Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A49RoutingModule { }
