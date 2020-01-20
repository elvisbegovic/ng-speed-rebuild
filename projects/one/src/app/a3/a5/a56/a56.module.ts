import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {A56RoutingModule} from './a56-routing.module';
import {A56Component} from './a56.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A56Component],
  imports: [
    CommonModule,
    A56RoutingModule,
    OneSharedModule
  ]
})
export class A56Module { }
