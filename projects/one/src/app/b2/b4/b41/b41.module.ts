import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B41RoutingModule } from './b41-routing.module';
import { B41Component } from './b41.component';
import {FileUploadModule} from 'ng2-file-upload';


@NgModule({
  declarations: [B41Component],
  imports: [
    CommonModule,
    B41RoutingModule,
    FileUploadModule
  ]
})
export class B41Module { }
