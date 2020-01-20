import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B37Component } from './b37.component';

const routes: Routes = [{ path: '', component: B37Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B37RoutingModule { }
