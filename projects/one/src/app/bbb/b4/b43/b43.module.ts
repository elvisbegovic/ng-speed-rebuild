import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {B43RoutingModule} from './b43-routing.module';
import {B43Component} from './b43.component';
import {FileUploadModule} from 'ng2-file-upload';


@NgModule({
  declarations: [B43Component],
  imports: [
    CommonModule,
    B43RoutingModule,
    FileUploadModule
  ]
})
export class B43Module { }
