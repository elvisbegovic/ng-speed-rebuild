import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {B27RoutingModule} from './b27-routing.module';
import {B27Component} from './b27.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [B27Component],
  imports: [
    CommonModule,
    B27RoutingModule,
    OneSharedModule
  ]
})
export class B27Module { }
