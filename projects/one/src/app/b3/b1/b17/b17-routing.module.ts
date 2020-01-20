import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B17Component } from './b17.component';

const routes: Routes = [{ path: '', component: B17Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B17RoutingModule { }
