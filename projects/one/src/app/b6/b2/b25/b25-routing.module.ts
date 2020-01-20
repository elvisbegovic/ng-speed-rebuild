import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B25Component } from './b25.component';

const routes: Routes = [{ path: '', component: B25Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B25RoutingModule { }
