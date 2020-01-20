import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B29Component } from './b29.component';

const routes: Routes = [{ path: '', component: B29Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B29RoutingModule { }
