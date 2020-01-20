import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B51Component } from './b51.component';

const routes: Routes = [{ path: '', component: B51Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B51RoutingModule { }
