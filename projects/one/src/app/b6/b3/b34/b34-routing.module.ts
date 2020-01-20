import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B34Component } from './b34.component';

const routes: Routes = [{ path: '', component: B34Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B34RoutingModule { }
