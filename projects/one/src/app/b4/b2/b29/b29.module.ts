import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B29RoutingModule } from './b29-routing.module';
import { B29Component } from './b29.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [B29Component],
  imports: [
    CommonModule,
    B29RoutingModule,
    OneSharedModule
  ]
})
export class B29Module { }
