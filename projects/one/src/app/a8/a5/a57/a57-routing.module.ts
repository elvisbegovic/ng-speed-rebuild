import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A57Component } from './a57.component';

const routes: Routes = [{ path: '', component: A57Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A57RoutingModule { }
