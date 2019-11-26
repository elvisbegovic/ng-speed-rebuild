import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B28Component } from './b28.component';

const routes: Routes = [{ path: '', component: B28Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B28RoutingModule { }
