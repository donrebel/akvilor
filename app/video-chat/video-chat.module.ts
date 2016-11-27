import { NgModule } from '@angular/core';

import { chatRouting } from './video-chat.routing';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { ChatVideoRoomComponent} from './chat-video-room/chat-video-room.component';
import { VideoChatService } from './services/video-chat.service';
//import * as r from 'webrtc-adapter';

@NgModule({
  imports: [
    chatRouting
  ],
  declarations: [
    ChatRoomComponent,
    ChatVideoRoomComponent
  ],
  exports: [
    ChatRoomComponent,
    ChatVideoRoomComponent
  ],
  providers: [
    VideoChatService
  ]
})
export class VideoChatModule {}
