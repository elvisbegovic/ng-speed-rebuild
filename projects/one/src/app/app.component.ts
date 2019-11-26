import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul class="slds-list_horizontal slds-has-dividers_left slds-has-block-links">
        <li class="slds-item"><a routerLink="a">a</a></li>
        <li class="slds-item"><a routerLink="aa">aa</a></li>
        <li class="slds-item"><a routerLink="aa">aa</a></li>
        <li class="slds-item"><a routerLink="b">b</a></li>
        <li class="slds-item"><a routerLink="bb">bb</a></li>
        <li class="slds-item"><a routerLink="bbb">bbb</a></li>
    </ul>
    <hr>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'one';
}
