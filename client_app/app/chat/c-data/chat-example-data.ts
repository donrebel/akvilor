/* tslint:disable:max-line-length */
// import { User } from '../user/user.model';
import { User } from '../../auth/auth.models';
import { Thread } from '../thread/thread.model';
import { Message } from '../message/message.model';
import { MessagesService } from '../message/messages.service';
import { ThreadsService } from '../thread/threads.service';
import { AuthService } from '../../auth/auth.service';
import * as moment from 'moment';

// the person using the app us Juliet
// const me: User      = new User('max.y.kovalenko', 'assets/chat_assets/images/avatars/female-avatar-1.png');
const ladycap: User = new User('', 'Lady Capulet', 'assets/chat_assets/images/avatars/female-avatar-2.png');
const echo: User    = new User('', 'Echo Bot', 'assets/chat_assets/images/avatars/male-avatar-1.png');
const rev: User     = new User('', 'Reverse Bot', 'assets/chat_assets/images/avatars/female-avatar-4.png');
const wait: User    = new User('', 'Waiting Bot', 'assets/chat_assets/images/avatars/male-avatar-2.png');
const umax: User    = new User('575219c5eddebf241d6126fb', 'Max', 'https://s.gravatar.com/avatar/774d996e8aa03c387171d7c9b7baabc4?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fma.png');

const tLadycap: Thread = new Thread('tLadycap', ladycap.name, ladycap.avatarSrc);
const tEcho: Thread    = new Thread('tEcho', echo.name, echo.avatarSrc);
const tRev: Thread     = new Thread('tRev', rev.name, rev.avatarSrc);
const tWait: Thread    = new Thread('tWait', wait.name, wait.avatarSrc);
const tMax: Thread    = new Thread('tMax', umax.name, umax.avatarSrc);



// const initialMessages: Array<Message> = [
//   new Message({
//     author: me,
//     // sentAt: moment().subtract(45, 'minutes').toDate(),
//     sentAt: '2017-04-15T07:42:51.918Z',
//     text: 'Yet let me weep for such a feeling loss.',
//     thread: tLadycap
//   }),
//   new Message({
//     author: ladycap,
//     // sentAt: moment().subtract(20, 'minutes').toDate(),
//     sentAt: '2017-04-15T07:52:51.918Z',
//     text: 'So shall you feel the loss, but not the friend which you weep for.',
//     thread: tLadycap
//   }),
//   new Message({
//     author: echo,
//     // sentAt: moment().subtract(1, 'minutes').toDate(),
//     sentAt: '2017-04-15T07:59:51.918Z',
//     text: `I\'ll echo whatever you send me`,
//     thread: tEcho
//   }),
//   new Message({
//     author: rev,
//     // sentAt: moment().subtract(3, 'minutes').toDate(),
//     sentAt: '2017-04-15T07:49:51.918Z',
//     text: `I\'ll reverse whatever you send me`,
//     thread: tRev
//   }),
//   new Message({
//     author: wait,
//     // sentAt: moment().subtract(4, 'minutes').toDate(),
//     sentAt: '2017-04-15T07:48:51.918Z',
//     text: `I\'ll wait however many seconds you send to me before responding. Try sending '3'`,
//     thread: tWait
//   }),
// ];

export class ChatExampleData {

  static init(messagesService: MessagesService,
              threadsService: ThreadsService,
              authService: AuthService
              // UsersService: UsersService
            ): void {

    // TODO make `messages` hot
    messagesService.messages.subscribe(() => ({}));



    // set "Juliet" as the current user
    // UsersService.setCurrentUser(me);

    // // create the initial messages
    // initialMessages.map( (message: Message) => messagesService.addMessage(message) );

    // threadsService.setCurrentThread(tEcho);

    this.setupInitialMessages(authService, messagesService);
    this.setupBots(messagesService);
  }

  static setupInitialMessages(authService: AuthService, messagesService: MessagesService): void {
    var initialMessages: Array<Message>;
    var me: User;

    authService.currentUser.subscribe(
      (user) => {
        me = user;
        if (me.name != 'guest') {
          initialMessages = [
            new Message({
              author: me,
              sentAt: moment().subtract(45, 'minutes').toDate(),
              text: 'Yet let me weep for such a feeling loss.',
              thread: tLadycap
            }),
            new Message({
              author: ladycap,
              sentAt: moment().subtract(20, 'minutes').toDate(),
              text: 'So shall you feel the loss, but not the friend which you weep for.',
              thread: tLadycap
            }),
            new Message({
              author: echo,
              sentAt: moment().subtract(1, 'minutes').toDate(),
              text: `I\'ll echo whatever you send me`,
              thread: tEcho
            }),
            new Message({
              author: rev,
              sentAt: moment().subtract(3, 'minutes').toDate(),
              text: `I\'ll reverse whatever you send me`,
              thread: tRev
            }),
            new Message({
              author: wait,
              sentAt: moment().subtract(4, 'minutes').toDate(),
              text: `I\'ll wait however many seconds you send to me before responding. Try sending '3'`,
              thread: tWait
            }),
            new Message({
              author: umax,
              sentAt: moment().subtract(4, 'minutes').toDate(),
              text: `I\'ll wait however many seconds you send to me before responding. Try sending '3'`,
              thread: tMax
            }),
          ];
          // create the initial messages
          initialMessages.map( (message: Message) => messagesService.addMessage(message) );
        }
      })

  }


  static setupBots(messagesService: MessagesService): void {

    // echo bot
    messagesService.messagesForThreadUser(tEcho, echo)
      .forEach( (message: Message): void => {
        messagesService.addMessage(
          new Message({
            author: echo,
            text: message.text,
            thread: tEcho
          })
        );
      },
      null);


    // reverse bot
    messagesService.messagesForThreadUser(tRev, rev)
      .forEach( (message: Message): void => {
        messagesService.addMessage(
          new Message({
            author: rev,
            text: message.text.split('').reverse().join(''),
            thread: tRev
          })
        );
      },
                null);

    // waiting bot
    messagesService.messagesForThreadUser(tWait, wait)
      .forEach( (message: Message): void => {

        let waitTime: number = parseInt(message.text, 10);
        let reply: string;

        if (isNaN(waitTime)) {
          waitTime = 0;
          reply = `I didn\'t understand ${message.text}. Try sending me a number`;
        } else {
          reply = `I waited ${waitTime} seconds to send you this.`;
        }

        setTimeout(
          () => {
            messagesService.addMessage(
              new Message({
                author: wait,
                text: reply,
                thread: tWait
              })
            );
          },
          waitTime * 1000);
      },
                null);

      // waiting bot
      messagesService.messagesForThreadUser(tMax, umax)
        .forEach(
          (message: Message): void => {
            let waitTime: number = parseInt(message.text, 10);
            let reply: string;

            if (isNaN(waitTime)) {
              waitTime = 0;
              reply = `I didn\'t understand ${message.text}. Try sending me a number`;
            } else {
              reply = `I waited ${waitTime} seconds to send you this.`;
            }

            setTimeout(
              () => {
                messagesService.addMessage(
                  new Message({
                    author: umax,
                    text: reply,
                    thread: tMax
                  })
                );
              },
              waitTime * 1000);
        },
        null
      );

  }
}
