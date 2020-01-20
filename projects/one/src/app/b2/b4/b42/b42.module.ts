import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B42RoutingModule } from './b42-routing.module';
import { B42Component } from './b42.component';
import {FileUploadModule} from 'ng2-file-upload';


@NgModule({
  declarations: [B42Component],
  imports: [
    CommonModule,
    B42RoutingModule,
    FileUploadModule
  ]
})
export class B42Module { }
