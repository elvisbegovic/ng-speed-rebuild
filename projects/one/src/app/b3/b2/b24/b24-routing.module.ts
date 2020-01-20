import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B24Component } from './b24.component';

const routes: Routes = [{ path: '', component: B24Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B24RoutingModule { }
