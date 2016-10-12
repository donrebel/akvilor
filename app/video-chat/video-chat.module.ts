import { NgModule } from '@angular/core';

import { chatRouting } from './video-chat.routing';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { VideoChatService } from './services/video-chat.service';
//import * as r from 'webrtc-adapter';

@NgModule({
  imports: [
    chatRouting
  ],
  declarations: [
    ChatRoomComponent
  ],
  exports: [
    ChatRoomComponent
  ],
  providers: [
    VideoChatService
  ]
})
export class VideoChatModule {}
