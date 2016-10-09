import { NgModule } from '@angular/core';

import { chatRouting } from './video-chat.routing';
import { ChatRoomComponent } from './chat-room/chat-room.component';
//import * as r from 'webrtc-adapter';

@NgModule({
  imports: [
    chatRouting
  ],
  declarations: [
    ChatRoomComponent
  ],
  providers: []
})
export class VideoChatModule {}
