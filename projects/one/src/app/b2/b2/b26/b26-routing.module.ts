import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B26Component } from './b26.component';

const routes: Routes = [{ path: '', component: B26Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B26RoutingModule { }
