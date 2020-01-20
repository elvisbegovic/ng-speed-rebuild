import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {B28RoutingModule} from './b28-routing.module';
import {B28Component} from './b28.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [B28Component],
  imports: [
    CommonModule,
    B28RoutingModule,
    OneSharedModule
  ]
})
export class B28Module { }
