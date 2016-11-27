import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ChatRoomInfo } from '../video-chat.d';
//import { }

@Injectable()
export class VideoChatService {
  private chatRoomInfo: ChatRoomInfo;
  private subject: Subject<ChatRoomInfo> = new Subject<ChatRoomInfo>();
  private videoFrameSubject: Subject<ChatRoomInfo> = new Subject<ChatRoomInfo>();

  setChatRoomInfo(chatRoomInfo: ChatRoomInfo): void {
    this.chatRoomInfo = chatRoomInfo;
    this.subject.next(chatRoomInfo);
  }

  getChatRoomInfo(): Observable<ChatRoomInfo> {
    return this.subject.asObservable();
  }

  openVideoFrame(chatRoomInfo: ChatRoomInfo): void {
    this.videoFrameSubject.next(chatRoomInfo);
  }
  getVideoFrameObservable(): Observable<ChatRoomInfo> {
    return this.videoFrameSubject.asObservable();
  }

}
