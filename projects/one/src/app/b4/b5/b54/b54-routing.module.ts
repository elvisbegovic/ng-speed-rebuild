import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B54Component } from './b54.component';

const routes: Routes = [{ path: '', component: B54Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B54RoutingModule { }
