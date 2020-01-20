import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B43Component } from './b43.component';

const routes: Routes = [{ path: '', component: B43Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B43RoutingModule { }
