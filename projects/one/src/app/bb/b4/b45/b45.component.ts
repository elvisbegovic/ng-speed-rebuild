import { Component, OnInit } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-b45',
  templateUrl: './b45.component.html',
  styles: []
})
export class B45Component implements OnInit {
  public uploader: FileUploader = new FileUploader({url: 'URL'});
  constructor() { }

  ngOnInit() {
  }

}
