import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B16Component } from './b16.component';

const routes: Routes = [{ path: '', component: B16Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B16RoutingModule { }
