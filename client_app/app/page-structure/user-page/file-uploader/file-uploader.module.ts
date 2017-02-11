import { NgModule } from '@angular/core';
import { FileUploadModule, FileUploader } from 'ng2-file-upload';

import { FileUploaderComponent } from './file-uploader.component';
@NgModule({
  imports: [
    FileUploadModule
  ],
  declarations: [
    FileUploaderComponent
  ],
  providers: [
    FileUploader
  ]
})

export class FileUploaderModule {}
