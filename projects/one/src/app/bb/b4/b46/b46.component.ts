import { Component, OnInit } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-b46',
  templateUrl: './b46.component.html',
  styles: []
})
export class B46Component implements OnInit {
  public uploader: FileUploader = new FileUploader({url: 'URL'});
  constructor() { }

  ngOnInit() {
  }

}
