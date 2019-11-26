import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B11Component } from './b11.component';

const routes: Routes = [{ path: '', component: B11Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B11RoutingModule { }
