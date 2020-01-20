import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B41Component } from './b41.component';

const routes: Routes = [{ path: '', component: B41Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B41RoutingModule { }
