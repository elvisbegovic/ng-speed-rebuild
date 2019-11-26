import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B44Component } from './b44.component';

const routes: Routes = [{ path: '', component: B44Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B44RoutingModule { }
