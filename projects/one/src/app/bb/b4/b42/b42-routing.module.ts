import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B42Component } from './b42.component';

const routes: Routes = [{ path: '', component: B42Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B42RoutingModule { }
