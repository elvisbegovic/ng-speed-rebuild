import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {A57RoutingModule} from './a57-routing.module';
import {A57Component} from './a57.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A57Component],
  imports: [
    CommonModule,
    A57RoutingModule,
    OneSharedModule
  ]
})
export class A57Module { }
