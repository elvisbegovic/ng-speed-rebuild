import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {A58RoutingModule} from './a58-routing.module';
import {A58Component} from './a58.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A58Component],
  imports: [
    CommonModule,
    A58RoutingModule,
    OneSharedModule
  ]
})
export class A58Module { }
