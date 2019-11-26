import { Component, OnInit } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-b42',
  templateUrl: './b42.component.html',
  styles: []
})
export class B42Component implements OnInit {
  public uploader: FileUploader = new FileUploader({url: 'URL'});
  constructor() { }

  ngOnInit() {
  }

}
