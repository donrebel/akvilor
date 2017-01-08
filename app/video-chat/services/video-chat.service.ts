import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ChatRoomInfo } from '../video-chat.d';
import { AuthHttp } from 'angular2-jwt';
//import { }

interface ConnectionInfo {
  socket:'',
  targetId:''
}

@Injectable()
export class VideoChatService {
  private chatRoomInfo: ChatRoomInfo;
  private subject: Subject<ChatRoomInfo> = new Subject<ChatRoomInfo>();
  private videoFrameSubject: Subject<ChatRoomInfo> = new Subject<ChatRoomInfo>();
  private apiBaseUrl: string;

  constructor(private authHttp: AuthHttp) {
    this.apiBaseUrl = '//localhost:3003';
  }

  setChatRoomInfo(chatRoomInfo: ChatRoomInfo): void {
    this.chatRoomInfo = chatRoomInfo;
    this.subject.next(chatRoomInfo);
  }

  getChatRoomInfo(): Observable<ChatRoomInfo> {
    return this.subject.asObservable();
  }

  runVideoChatApp(connectionInfo: ConnectionInfo) {
    // 1. write connectionInfo to the DB
    // 2. get objectId of created connectionInfo object in DB
    // 3. open videoChatApp in the new window with objectId as a parameter

    var connectionObjectId = '123'
    window.open(`${this.apiBaseUrl}/call/${connectionObjectId}`, "MsgWindow", "width=640, height=480");

  }

  openVideoFrame(chatRoomInfo: ChatRoomInfo): void {
    this.videoFrameSubject.next(chatRoomInfo);
  }
  getVideoFrameObservable(): Observable<ChatRoomInfo> {
    return this.videoFrameSubject.asObservable();
  }
}
