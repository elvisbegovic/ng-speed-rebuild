import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A22Component } from './a22.component';

const routes: Routes = [{ path: '', component: A22Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A22RoutingModule { }
