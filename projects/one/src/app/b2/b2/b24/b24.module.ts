import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {B24RoutingModule} from './b24-routing.module';
import {B24Component} from './b24.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [B24Component],
  imports: [
    CommonModule,
    B24RoutingModule,
    OneSharedModule
  ]
})
export class B24Module { }
