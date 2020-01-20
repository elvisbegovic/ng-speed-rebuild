import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {B17RoutingModule} from './b17-routing.module';
import {B17Component} from './b17.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [B17Component],
  imports: [
    CommonModule,
    B17RoutingModule,
    OneSharedModule
  ]
})
export class B17Module { }
