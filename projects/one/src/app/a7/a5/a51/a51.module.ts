import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {A51RoutingModule} from './a51-routing.module';
import {A51Component} from './a51.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A51Component],
  imports: [
    CommonModule,
    A51RoutingModule,
    OneSharedModule
  ]
})
export class A51Module { }
