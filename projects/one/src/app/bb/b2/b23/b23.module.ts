import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {B23RoutingModule} from './b23-routing.module';
import {B23Component} from './b23.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [B23Component],
  imports: [
    CommonModule,
    B23RoutingModule,
    OneSharedModule
  ]
})
export class B23Module { }
