import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { Observable } from 'rxjs';
import { Thread } from './thread/thread.model';
import { ThreadsService } from './thread/threads.service';

@Component({
  moduleId: module.id,
  selector: 'chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css']
})
export class ChatComponent {
  mode = 'chatList'

  threads: Observable<any>;

  constructor(private router: Router, threadsService: ThreadsService) {
    this.threads = threadsService.orderedThreads;
  }

  openChatBody(id: string) {
    this.mode = 'chatBody'
  }

  closeChatBody() {
    this.mode = 'chatList'
  }

  closeChatWindow() {
    this.router.navigate([{ outlets: { chat: null }}]);
  }

  onOpenChatWindow(threadId: string) {
    console.log(threadId);
    this.mode = 'chatBody';    
  }
}
