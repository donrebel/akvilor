import { Component, OnInit, Inject } from '@angular/core';

import './rxjs-operators';

import { AuthService } from './auth/auth.service';
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
    private chatRooms: ChatRoomInfo[] = [];
    private videoFrame: {};
    private currentUserProfileID: string = '';
    private currentUserProfileLink: string = '';

    constructor(
      private auth: AuthService,
      private videoChatService: VideoChatService,
      public router: Router
    ) {
    }

    ngOnInit() {
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

      this.auth.getCurrentUserProfileFromDB()
    }

    test() {
      let c = this.auth.authenticated();
      console.log(c)
    }
}
