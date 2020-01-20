import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {B48RoutingModule} from './b48-routing.module';
import {B48Component} from './b48.component';
import {FileUploadModule} from 'ng2-file-upload';


@NgModule({
  declarations: [B48Component],
  imports: [
    CommonModule,
    B48RoutingModule,
    FileUploadModule
  ]
})
export class B48Module { }
