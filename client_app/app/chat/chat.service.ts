import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { APP_CONFIG, AppConfig } from '../app-config';
import { UtilService } from '../core/services/util.service';

interface IChatMessageItem {
  session_id: string,
  message_id: string,
  user_id: string,
  timestamp: Date,
  message_body: string
  status: string
}

interface IChatSessionParticipant {
  user_id: string,
  nickname: string,
  picture: string
}

interface IChatMessage {
  message_id: string,
  user_id: string,
  timestamp: Date,
  message_body: string,
  status: string
}

export interface IChatSession {
  session_id: string,
  participants: IChatSessionParticipant[],
  messages: IChatMessage[]
}

@Injectable()
export class ChatService {
  private apiBaseUrl: string;

  constructor (
    @Inject(APP_CONFIG) appConfig: AppConfig,
    private http: Http,
    private util: UtilService
  ) {
    this.apiBaseUrl = appConfig.apiEndpoint;
  }

  // getChatStream(user_id: string):Observable<IChatMessageItem[]> {
  //
  // }

}
