import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B32Component } from './b32.component';

const routes: Routes = [{ path: '', component: B32Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B32RoutingModule { }
