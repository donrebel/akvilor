import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule } from '@angular/http';

import { VideoChatModule } from '../video-chat/video-chat.module';
import { AuthModule } from '../auth/auth.module';
import { SearchService } from './services/search.service';
import { UtilService } from './services/util.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from '../app-data';

@NgModule({
    imports: [
      HttpModule,
      VideoChatModule,
      AuthModule,

      InMemoryWebApiModule.forRoot(AppData)
    ],
    exports: [
      VideoChatModule,
      AuthModule
    ],
    providers: [
      SearchService,
      UtilService
    ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
