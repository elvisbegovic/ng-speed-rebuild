import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-a25',
  templateUrl: './a25.component.html',
  styles: []
})
export class A25Component implements OnInit {
  @ViewChild('mylocal', { static: true }) mylocal: ElementRef; data = [
    {
      "_id": "5ddd273607a8859a6ab8eea1",
      "index": 0
    },
    {
      "_id": "5ddd273623415c0001e91030",
      "index": 1
    },
    {
      "_id": "5ddd2736983861f5dc238d56",
      "index": 2
    },
    {
      "_id": "5ddd2736e58e9c71f1afbaad",
      "index": 3
    },
    {
      "_id": "5ddd273616bcb433b097b075",
      "index": 4
    },
    {
      "_id": "5ddd273611b9ff75423eb5e4",
      "index": 5
    },
    {
      "_id": "5ddd2736ece5f489e86202e8",
      "index": 6
    },
    {
      "_id": "5ddd27361db2e0fe83974520",
      "index": 7
    },
    {
      "_id": "5ddd27364520b89cb8b9f7ed",
      "index": 8
    },
    {
      "_id": "5ddd2736fa6a1f34d029d478",
      "index": 9
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
