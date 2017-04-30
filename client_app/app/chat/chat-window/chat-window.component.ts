import {
  Component,
  Inject,
  ElementRef,
  EventEmitter,
  Output,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs';

// import { User } from '../user/user.model';
import { User } from '../../auth/auth.models';
// import { UsersService } from '../user/users.service';
import { AuthService } from '../../auth/auth.service';
import { Thread } from '../thread/thread.model';
import { ThreadsService } from '../thread/threads.service';
import { Message } from '../message/message.model';
import { MessagesService } from '../message/messages.service';

@Component({
  moduleId: module.id,
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  messages: Observable<any>;
  currentThread: Thread;
  draftMessage: Message;
  currentUser: User;

  @Output() chatWindowEvent = new EventEmitter<String>()

  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService,
              // public UsersService: UsersService,
              public AuthService: AuthService,
              public el: ElementRef) {
  }

  ngOnInit(): void {
    this.messages = this.threadsService.currentThreadMessages;

    this.draftMessage = new Message();

    this.threadsService.currentThread.subscribe(
      (thread: Thread) => {
        this.currentThread = thread;
      });

    // this.UsersService.currentUser
    // .subscribe(
    //   (user: User) => {
    //     this.currentUser = user;
    //   });
    this.AuthService.currentUser
      .subscribe(
        (user: User) => {
          this.currentUser = user;
        });

    this.messages
      .subscribe(
        (messages: Array<Message>) => {
          setTimeout(() => {
            this.scrollToBottom();
          });
        });
  }

  onEnter(msgText: string): void {
    if (msgText) {
      this.draftMessage.text = msgText;
      this.sendMessage();
      event.preventDefault();
    }
  }

  sendMessage(): void {
    const m: Message = this.draftMessage;
    m.author = this.currentUser;
    m.thread = this.currentThread;
    m.isRead = true;
    this.messagesService.addMessage(m);
    this.draftMessage = new Message();
  }

  scrollToBottom(): void {
    const scrollPane: any = this.el
      .nativeElement.querySelector('.msg-container-base');
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }

  emitChatWindowEvent(eventName: string): void {
    this.chatWindowEvent.emit(eventName)
  }
}
