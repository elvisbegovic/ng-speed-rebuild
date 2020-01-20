import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {B44RoutingModule} from './b44-routing.module';
import {B44Component} from './b44.component';
import {FileUploadModule} from 'ng2-file-upload';


@NgModule({
  declarations: [B44Component],
  imports: [
    CommonModule,
    B44RoutingModule,
    FileUploadModule
  ]
})
export class B44Module { }
