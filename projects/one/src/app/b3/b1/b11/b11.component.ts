import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b11',
  templateUrl: './b11.component.html',
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
export class B11Component implements OnInit {
  data = [
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
    },{
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

  public az: any = {id: 1, personsNames: 'aaa'};
  public bz: any = {id: 1, personsNames: 'bbb'};
  public cz: any = {id: 1, ideNumber: '1234abc', isPrincipal: true, isInBuilding: true};

  public group: any = {
    description: {
      faker: 'lorem.paragraph'
    }
  };
  public conditionalField: any = {
    type: {
      values: ['HOUSE', 'CAR', 'MOTORBIKE']
    },
    'object.type=="HOUSE",location': {
      faker: 'address.city'
    },
    'object.type=="CAR"||object.type=="MOTORBIKE",speed': {
      faker: 'random.number'
    }
  };
  public users: any = {
    firstName: {
      faker: 'name.firstName'
    },
    lastName: {
      faker: 'name.lastName'
    },
    country: {
      faker: 'address.country'
    },
    createdAt: {
      faker: 'date.past'
    },
    username: () => (
      this.users.lastName.substring(0, 5) +
      this.users.firstName.substring(0, 3) +
      Math.floor(Math.random() * 10)
    ),
    ok: () => this.users.username(),
    conditionalField: this.conditionalField
  };


  public aa(o: any | {id: number}): any | {id: number} {
    console.log(o);
    o.id += 1;
    o.id += 1;
    return o;
  }

  public bb(o: any | {id: number}): any | {id: number} {
    console.log(o);
    o.id += 1;
    o.id += 1;
    return o;
  }

  public cc(o: any | {id: number}): any | {id: number} {
    console.log(o);
    o.id += 1;
    o.id += 1;
    return o;
  }

  public fibonacci(num): number {
    // tslint:disable-next-line:one-variable-per-declaration
    let a = 1, b = 0, temp;

    while (num >= 0) {
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }

    return b;
  }

  public ngOnInit() {
    // call useless methods
    this.cc(this.bb(this.aa(this.az)));
    this.cc(this.bb(this.aa(this.bz)));
    this.cc(this.bb(this.aa(this.cz)));
    // call fibonacci
    this.fibonacci(10);
    // edit class props
    this.users.firstName += '!';
    this.conditionalField.type = true;
    this.group.description += 'Heya';
  }

}
