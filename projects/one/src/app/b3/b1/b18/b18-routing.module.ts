import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B18Component } from './b18.component';

const routes: Routes = [{ path: '', component: B18Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B18RoutingModule { }
