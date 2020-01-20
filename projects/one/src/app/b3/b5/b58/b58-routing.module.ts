import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B58Component } from './b58.component';

const routes: Routes = [{ path: '', component: B58Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B58RoutingModule { }
