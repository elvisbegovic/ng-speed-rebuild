import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B49Component } from './b49.component';

const routes: Routes = [{ path: '', component: B49Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B49RoutingModule { }
