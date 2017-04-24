import { Component, Inject, ElementRef, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Observable } from 'rxjs';

import { User } from './user/user.model';
import { UsersService } from './user/users.service';
import { Thread } from './thread/thread.model';
import { ThreadsService } from './thread/threads.service';
import { Message } from './message/message.model';
import { MessagesService } from './message/messages.service';

@Component({
  moduleId: module.id,
  selector: 'chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css']
})
export class ChatComponent {
  mode = 'chatList';
  threads: Observable<any>;

  messages: Observable<any>;
  currentThread: Thread;
  draftMessage: Message;
  currentUser: User;

  constructor(public router: Router,
              public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public UsersService: UsersService,
              public el: ElementRef) {

    this.threads = threadsService.orderedThreads;
  }

  // ngOnInit(): void {
  //   this.messages = this.threadsService.currentThreadMessages;
  //
  //   this.draftMessage = new Message();
  //
  //   this.threadsService.currentThread.subscribe(
  //     (thread: Thread) => {
  //       this.currentThread = thread;
  //     });
  //
  //   this.UsersService.currentUser
  //     .subscribe(
  //       (user: User) => {
  //         this.currentUser = user;
  //       });
  //
  //   this.messages
  //     .subscribe(
  //       (messages: Array<Message>) => {
  //         setTimeout(() => {
  //           this.scrollToBottom();
  //         });
  //       });
  // }
  //
  // onEnter(event: any): void {
  //   console.log(this.draftMessage.text);
  //   this.sendMessage();
  //   event.preventDefault();
  // }
  //
  // sendMessage(): void {
  //   const m: Message = this.draftMessage;
  //   m.author = this.currentUser;
  //   m.thread = this.currentThread;
  //   m.isRead = true;
  //   this.messagesService.addMessage(m);
  //   this.draftMessage = new Message();
  // }
  //
  // scrollToBottom(): void {
  //   if (this.mode == "chatBody") {
  //     const scrollPane: any = this.el
  //       .nativeElement.querySelector('.msg-container-base');
  //     scrollPane.scrollTop = scrollPane.scrollHeight;
  //   }
  // }

  onChatWindowEvent(signal: string) {
    if (signal == "closeChat") {
      this.router.navigate([{ outlets: { chat: null }}]);
    } else if (signal == "openChatThreads") {
      this.mode = 'chatList'
    }
  }


  openChatBody(id: string) {
    this.mode = 'chatBody'
  }

  // closeChatBody() {
  //   this.mode = 'chatList'
  // }

  // closeChatWindow() {
  //   this.router.navigate([{ outlets: { chat: null }}]);
  // }

  onOpenChatWindow() {
    // this.currentThread = currentThread;
    this.mode = 'chatBody';
  }
}
