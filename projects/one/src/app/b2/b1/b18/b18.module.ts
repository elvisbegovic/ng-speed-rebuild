import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {B18RoutingModule} from './b18-routing.module';
import {B18Component} from './b18.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [B18Component],
  imports: [
    CommonModule,
    B18RoutingModule,
    OneSharedModule
  ]
})
export class B18Module { }
