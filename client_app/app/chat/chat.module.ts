import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';

import { UsersService } from './user/users.service';
import { ThreadsService } from './thread/threads.service';
import { MessagesService } from './message/messages.service';

import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatThreadComponent } from './chat-thread/chat-thread.component';
// import { ChatThreadsComponent } from './chat-threads/chat-threads.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { FromNowPipe } from './pipes/from-now.pipe';

import { ChatContainerTmp } from './chat-container-tmp.component';

@NgModule({
  imports: [
    SharedModule,
    ChatRoutingModule
  ],
  declarations: [
    ChatContainerTmp,

    ChatComponent,

    ChatMessageComponent,
    ChatThreadComponent,
    // ChatThreadsComponent,
    ChatWindowComponent,
    ChatPageComponent,
    FromNowPipe
  ],
  providers: [
    MessagesService, ThreadsService, UsersService
  ]
})
export class ChatModule {

}
