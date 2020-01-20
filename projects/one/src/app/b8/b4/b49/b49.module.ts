import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {B49RoutingModule} from './b49-routing.module';
import {B49Component} from './b49.component';
import {FileUploadModule} from 'ng2-file-upload';


@NgModule({
  declarations: [B49Component],
  imports: [
    CommonModule,
    B49RoutingModule,
    FileUploadModule
  ]
})
export class B49Module { }
