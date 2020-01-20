import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BRoutingModule } from './b-routing.module';
import { BComponent } from './b.component';


@NgModule({
  declarations: [BComponent],
  imports: [
    CommonModule,
    BRoutingModule
  ]
})
export class BModule { }
