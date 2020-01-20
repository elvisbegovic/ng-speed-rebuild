import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ARoutingModule } from './a-routing.module';
import { AComponent } from './a.component';
import {TreeModule} from 'angular-tree-component';


@NgModule({
  declarations: [AComponent],
  imports: [
    CommonModule,
    ARoutingModule,
    TreeModule.forRoot()
  ]
})
export class AModule { }
