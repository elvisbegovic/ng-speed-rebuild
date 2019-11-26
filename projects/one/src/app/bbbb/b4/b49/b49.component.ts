import { Component, OnInit } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-b49',
  templateUrl: './b49.component.html',
  styles: []
})
export class B49Component implements OnInit {
  public uploader: FileUploader = new FileUploader({url: 'URL'});
  constructor() { }

  ngOnInit() {
  }

}
