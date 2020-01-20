import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {B46RoutingModule} from './b46-routing.module';
import {B46Component} from './b46.component';
import {FileUploadModule} from 'ng2-file-upload';


@NgModule({
  declarations: [B46Component],
  imports: [
    CommonModule,
    B46RoutingModule,
    FileUploadModule
  ]
})
export class B46Module { }
