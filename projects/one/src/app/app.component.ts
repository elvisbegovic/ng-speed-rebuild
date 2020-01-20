import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul class="slds-list_horizontal slds-has-dividers_left slds-has-block-links">
      <li class="slds-item"><a routerLink="a1">a1</a></li>
      <li class="slds-item"><a routerLink="a2">a2</a></li>
      <li class="slds-item"><a routerLink="a3">a3</a></li>
      <li class="slds-item"><a routerLink="a4">a4</a></li>
      <li class="slds-item"><a routerLink="a5">a5</a></li>
      <li class="slds-item"><a routerLink="a6">a6</a></li>
      <li class="slds-item"><a routerLink="a7">a7</a></li>
      <li class="slds-item"><a routerLink="a8">a8</a></li>
      <!-- b -->
      <li class="slds-item"><a routerLink="b1">b1</a></li>
      <li class="slds-item"><a routerLink="b2">b2</a></li>
      <li class="slds-item"><a routerLink="b3">b3</a></li>
      <li class="slds-item"><a routerLink="b4">b4</a></li>
      <li class="slds-item"><a routerLink="b5">b5</a></li>
      <li class="slds-item"><a routerLink="b6">b6</a></li>
      <li class="slds-item"><a routerLink="b7">b7</a></li>
      <li class="slds-item"><a routerLink="b8">b8</a></li>
    </ul>
    <hr>
    <router-outlet></router-outlet>
  `,
  styles: [`
    virtual-scroller {
      background: white;
      color:black;
      width: inherit;
      font-size: inherit;
      display: inherit;
    }
    virtual-scroller:hover {
      background: white;
      color:black;
      width: inherit;
      font-size: inherit;
      display: inherit;
    }
    p {
      background: white;
      color:black;
      width: inherit;
      font-size: inherit;
      display: inherit;
    }
    p:hover {
      background: white;
      color:black;
      width: inherit;
      font-size: inherit;
      display: inherit;
    }
    table {
      background: white;
      color:black;
      width: inherit;
      font-size: inherit;
      display: inherit;
    }
    table:hover {
      background: white;
      color:black;
      width: inherit;
      font-size: inherit;
      display: inherit;
    }
    div {
      background: white;
      color:black;
      width: inherit;
      font-size: inherit;
      display: inherit;
    }
    div:hover {
      background: white;
      color: black;
      width: inherit;
      font-size: inherit;
      display: inherit;
    }
    slds-file-selector {
      background: white;
      color:black;
      width: inherit;
      font-size: inherit;
      display: inherit;
    }
    slds-file-selector:hover {
      background: white;
      color: black;
      width: inherit;
      font-size: inherit;
      display: inherit;
    }
    tree-root {
      background: white;
      color:black;
      width: inherit;
      font-size: inherit;
      display: inherit;
    }
    slds-file-selector:hover {
      background: white;
      color: black;
      width: inherit;
      font-size: inherit;
      display: inherit;
    }
  `]
})
export class AppComponent {
  title = 'one';
}
