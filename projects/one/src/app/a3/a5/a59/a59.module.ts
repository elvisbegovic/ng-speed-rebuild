import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {A59RoutingModule} from './a59-routing.module';
import {A59Component} from './a59.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A59Component],
  imports: [
    CommonModule,
    A59RoutingModule,
    OneSharedModule
  ]
})
export class A59Module { }
