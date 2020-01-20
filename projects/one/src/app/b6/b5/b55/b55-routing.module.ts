import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B55Component } from './b55.component';

const routes: Routes = [{ path: '', component: B55Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B55RoutingModule { }
