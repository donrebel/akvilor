import { Component, OnInit, Inject } from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';

import './rxjs-operators';
import * as _ from 'lodash';

import { AuthService } from './auth/auth.service';
import { VideoChatService } from './video-chat/services/video-chat.service';
import { ChatRoomInfo } from './video-chat/video-chat.d';

import { ChatExampleData } from './chat/c-data/chat-example-data';
import { UsersService } from './chat/user/users.service';
import { ThreadsService } from './chat/thread/threads.service';
import { MessagesService } from './chat/message/messages.service';
import { Thread } from './chat/thread/thread.model';
import { Message } from './chat/message/message.model';

@Component({
  selector: 'akvilor',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent implements OnInit {
    unreadMessagesCount: number;

    private chatRooms: ChatRoomInfo[] = [];
    private videoFrame: {};
    private currentUserProfileID: string = '';
    private currentUserProfileLink: string = '';

    constructor(
      public authService: AuthService,
      public router: Router,
      public usersService: UsersService,
      public messagesService: MessagesService,
      public threadsService: ThreadsService,
      public videoChatService: VideoChatService
    ) {

      ChatExampleData.init(messagesService, threadsService, authService);
    }

    ngOnInit() {

      this.messagesService.messages
        .combineLatest(
          this.threadsService.currentThread,
          (messages: Message[], currentThread: Thread) =>
            [currentThread, messages] )

        .subscribe(([currentThread, messages]: [Thread, Message[]]) => {
          this.unreadMessagesCount =
            _.reduce(
              messages,
              (sum: number, m: Message) => {
                const messageIsInCurrentThread: boolean = m.thread &&
                  currentThread &&
                  (currentThread.id === m.thread.id);
                // note: in a "real" app you should also exclude
                // messages that were authored by the current user b/c they've
                // already been "read"
                if (m && !m.isRead && !messageIsInCurrentThread) {
                  sum = sum + 1;
                }
                return sum;
              },
              0);
        });

      this.videoChatService.getChatRoomInfo().subscribe((chatRoomInfo: ChatRoomInfo) => {
        console.log('chat room for: ', chatRoomInfo.data.chatLink)
        this.chatRooms.push(chatRoomInfo);
      });

      this.videoChatService.getVideoFrameObservable().subscribe((chatRoomInfo: ChatRoomInfo) => {
        if (chatRoomInfo.action == "open") {
          this.videoFrame = {name: "ww"};
        } else {
          this.videoFrame = false;
        }
      })

      this.authService.getCurrentUserProfileFromDB()
    }

    test() {
      let c = this.authService.authenticated();
      console.log(c)
    }
}
