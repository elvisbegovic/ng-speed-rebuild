import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {B26RoutingModule} from './b26-routing.module';
import {B26Component} from './b26.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [B26Component],
  imports: [
    CommonModule,
    B26RoutingModule,
    OneSharedModule
  ]
})
export class B26Module { }
