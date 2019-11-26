import { Component, OnInit } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-b41',
  templateUrl: './b41.component.html',
  styles: []
})
export class B41Component implements OnInit {
  public uploader: FileUploader = new FileUploader({url: 'URL'});
  constructor() { }

  ngOnInit() {
  }

}
