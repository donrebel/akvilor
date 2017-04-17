import { Component, Inject } from '@angular/core';
import { ChatExampleData } from './c-data/chat-example-data';

import { UsersService } from './user/users.service';
import { ThreadsService } from './thread/threads.service';
import { MessagesService } from './message/messages.service';

@Component({
  moduleId: module.id,
  selector: 'chat-container-tmp',
  templateUrl: './chat-container-tmp.component.html',
})
export class ChatContainerTmp {
    constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public usersService: UsersService) {
    ChatExampleData.init(messagesService, threadsService, usersService);
  }
}
