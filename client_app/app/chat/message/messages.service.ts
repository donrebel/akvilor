/// <reference path="../../../custom_typings.d.ts" />

import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject, Observable } from 'rxjs/Rx';

import { APP_CONFIG, AppConfig } from '../../app-config';
import { User } from '../../auth/auth.models';
import { Thread } from '../thread/thread.model';
import { Message, MessagingEvent } from '../message/message.model';

import { UtilService } from '../../core/services/util.service';
import { IoService } from '../../core/services/io.service';
import { AuthService } from '../../auth/auth.service';

const initialMessages: Message[] = [];

interface IMessagesOperation extends Function {
    (messages: Message[]): Message[];
}

@Injectable()
export class MessagesService {
  newMessages: Subject<Message> = new Subject<Message>();
  messages: Observable<Message[]>;
  updates: Subject<any> = new Subject<any>();
  // action streams
  create: Subject<Message> = new Subject<Message>();
  markThreadAsRead: Subject<any> = new Subject<any>();

  private url: string;
  private socketUrl: string;
  private socket: Socket;
  private userIsWriting: boolean = false;
  private currentUser: User;

  constructor(
    @Inject(APP_CONFIG) appConfig: AppConfig,
    private http: Http,
    private utilService: UtilService,
    private authService: AuthService,
    private ioService: IoService
  ) {
    this.url = appConfig.chatApiUrl;
    this.socketUrl = appConfig.socketUrl

    var io = ioService.get();
    var jwt = localStorage.getItem('id_token');
    this.socket = io.connect(this.socketUrl, {query: 'token=' + jwt});

    this.socket.on('connect', () => {
      console.log('connected');
    });

    this.socket.on('disconnect', () => {
      console.log('disconnected');
    });

    this.authService.currentUser
      .subscribe((user: User) => {
        this.currentUser = user
      })

    this.socket.on(MessagingEvent[MessagingEvent.NewMessage], (msg) => {
      //  this.newMessage.next(new Message(JSON.parse(msg)));
      this.addMessage(new Message(JSON.parse(msg)));
    });

    // this.socket.on(MessagingEvent[MessagingEvent.MessageReceived], (msgId) => {
    //   //  this.receivedMessage.next(msgId);
    //    this.addMessage(new Message(JSON.parse(msg)));
    // });

    this.socket.on(MessagingEvent[MessagingEvent.UserTyping], (writer) => {
      //  writer.isWriting = true;
      //  this.writer.next(new Writer(writer));
    });

    this.socket.on(MessagingEvent[MessagingEvent.UserStoppedTyping], (writer) => {
      //  writer.isWriting = false;
      //  this.writer.next(new Writer(writer));
    });

    this.messages = this.updates
      .scan((messages: Message[], operation: IMessagesOperation) => {
              return operation(messages);
            },
            initialMessages
          )
      .publishReplay(1)
      .refCount();

      this.create
      .map( function(message: Message): IMessagesOperation {
        return (messages: Message[]) => {
          return messages.concat(message);
        };
      })
      .subscribe(this.updates);

      this.newMessages
        .subscribe(this.create);


      this.markThreadAsRead
      .map( (thread: Thread) => {
        return (messages: Message[]) => {
           return messages.map( (message: Message) => {
             // note that we're manipulating `message` directly here. Mutability
             // can be confusing and there are lots of reasons why you might want
             // to, say, copy the Message object or some other 'immutable' here
             if (message.thread.id === thread.id) {
               message.isRead = true;
             }
             return message;
           });
        };
      })
      .subscribe(this.updates);

      this.getMessages();
    }

    addMessage(message: Message): void {
      this.newMessages.next(message);
    }

    messagesForThreadUser(thread: Thread, user: User): Observable<Message> {
      return this.newMessages
        .filter((message: Message) => {
                 // belongs to this thread
          return (message.thread.id === thread.id) &&
                 // and isn't authored by this user
                 (message.author.id !== user.id);
        });
    }

    getMessages(): void {
      this.http.get(this.url + 'messages')
        .map(this.utilService.extractDataHttpRequest)
        .catch(this.utilService.handleErrorHttpRequest)
        .subscribe((messages: Message[]) => {
          messages.map((message: Message) => {
            this.addMessage(message)
          })
        })
    }

    sendMessage(message: Message): void {
      let msg = JSON.stringify(message);
      this.socket.emit(MessagingEvent[MessagingEvent.SendMessage], msg);
    }

    startTyping(): void {
      if (this.userIsWriting === false) {
        this.userIsWriting = true;
        this.socket.emit(MessagingEvent[MessagingEvent.ImTyping], this.currentUser);
      }
    }

    stopTyping(): void {
      if (this.userIsWriting === true) {
        this.userIsWriting = false;
        this.socket.emit(MessagingEvent[MessagingEvent.IStoppedTyping], this.currentUser);
      }
    }

}

export const messagesServiceInjectables: Array<any> = [
  MessagesService
];
