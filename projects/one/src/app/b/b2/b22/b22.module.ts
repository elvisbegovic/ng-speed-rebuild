import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {B22RoutingModule} from './b22-routing.module';
import {B22Component} from './b22.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [B22Component],
  imports: [
    CommonModule,
    B22RoutingModule,
    OneSharedModule
  ]
})
export class B22Module { }
