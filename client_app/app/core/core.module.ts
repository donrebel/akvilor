import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { VideoChatModule } from '../video-chat/video-chat.module';
import { AuthModule } from '../auth/auth.module';

@NgModule({
    imports: [
      CommonModule,
      HttpModule,
      VideoChatModule,
      AuthModule
    ],
    exports: [
      VideoChatModule,
      AuthModule
    ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
