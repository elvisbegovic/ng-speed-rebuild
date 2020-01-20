import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {A53RoutingModule} from './a53-routing.module';
import {A53Component} from './a53.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A53Component],
  imports: [
    CommonModule,
    A53RoutingModule,
    OneSharedModule
  ]
})
export class A53Module { }
