import { Component, OnInit } from '@angular/core';
//import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from '@angular/common';
// import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload';
import { FileUploader } from 'ng2-file-upload';

const uploadURL = 'http://localhost:3000/profile/';
//const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  moduleId: module.id,
  selector: 'app-file-uploader',
  templateUrl: 'file-uploader.component.html',
  styleUrls: ['file-uploader.component.css'],
//  directives: [FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class FileUploaderComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url: uploadURL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  constructor() {}

  ngOnInit() {
  }

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
}
