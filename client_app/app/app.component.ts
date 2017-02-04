import { Component, OnInit } from '@angular/core';

import './rxjs-operators';

import { AuthService } from './core/services/auth.service';
import { VideoChatService } from './video-chat/services/video-chat.service';
import { ChatRoomInfo } from './video-chat/video-chat.d';


import { Router,
         NavigationExtras } from '@angular/router';

@Component({
  selector: 'akvilor',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent implements OnInit {
    //private openChatRoom: boolean = false;
    private chatRooms: ChatRoomInfo[] = [];
    private videoFrame: {};

    constructor(
      private auth: AuthService,
      private videoChatService: VideoChatService,
      public router: Router

    ) {}

    ngOnInit() {
      this.videoChatService.getChatRoomInfo().subscribe((chatRoomInfo: ChatRoomInfo) => {
        console.log('chat room for: ', chatRoomInfo.data.chatLink)
        //this.openChatRoom = true;
        this.chatRooms.push(chatRoomInfo);
      });

      this.videoChatService.getVideoFrameObservable().subscribe((chatRoomInfo: ChatRoomInfo) => {
        if (chatRoomInfo.action == "open") {
          this.videoFrame = {name: "ww"};
        } else {
          this.videoFrame = false;
        }
      })


    }

    // login() {
    //   this.auth.login();
    // }
    // logout() {
    //   this.auth.logout();
    // }
}
