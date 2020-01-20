import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {B45RoutingModule} from './b45-routing.module';
import {B45Component} from './b45.component';
import {FileUploadModule} from 'ng2-file-upload';


@NgModule({
  declarations: [B45Component],
  imports: [
    CommonModule,
    B45RoutingModule,
    FileUploadModule
  ]
})
export class B45Module { }
