import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {B16RoutingModule} from './b16-routing.module';
import {B16Component} from './b16.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [B16Component],
  imports: [
    CommonModule,
    B16RoutingModule,
    OneSharedModule
  ]
})
export class B16Module { }
