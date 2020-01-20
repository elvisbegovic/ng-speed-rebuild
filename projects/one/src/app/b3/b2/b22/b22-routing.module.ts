import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B22Component } from './b22.component';

const routes: Routes = [{ path: '', component: B22Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B22RoutingModule { }
