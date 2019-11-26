import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {A55RoutingModule} from './a55-routing.module';
import {A55Component} from './a55.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A55Component],
  imports: [
    CommonModule,
    A55RoutingModule,
    OneSharedModule
  ]
})
export class A55Module { }
