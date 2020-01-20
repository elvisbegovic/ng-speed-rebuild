import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B46Component } from './b46.component';

const routes: Routes = [{ path: '', component: B46Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B46RoutingModule { }
