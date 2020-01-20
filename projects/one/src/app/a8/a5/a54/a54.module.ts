import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {A54RoutingModule} from './a54-routing.module';
import {A54Component} from './a54.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A54Component],
  imports: [
    CommonModule,
    A54RoutingModule,
    OneSharedModule
  ]
})
export class A54Module { }
