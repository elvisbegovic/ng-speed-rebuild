import {NgModule} from '@angular/core';
import {TreeModule} from 'angular-tree-component';
import {ReactiveFormsModule} from '@angular/forms';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    TreeModule.forRoot(),
    VirtualScrollerModule
  ],
  exports: [
    ReactiveFormsModule,
    TreeModule,
    VirtualScrollerModule
  ]
})
export class OneSharedModule { }
