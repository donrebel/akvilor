import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';
import { User } from '../user/user.model';
import { Thread } from '../thread/thread.model';
import { Message } from '../message/message.model';

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

  constructor() {
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
}

export const messagesServiceInjectables: Array<any> = [
  MessagesService
];
