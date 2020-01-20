import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {B25RoutingModule} from './b25-routing.module';
import {B25Component} from './b25.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [B25Component],
  imports: [
    CommonModule,
    B25RoutingModule,
    OneSharedModule
  ]
})
export class B25Module { }
