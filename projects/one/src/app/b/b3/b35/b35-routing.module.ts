import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B35Component } from './b35.component';

const routes: Routes = [{ path: '', component: B35Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B35RoutingModule { }
