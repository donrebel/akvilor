import { Message } from '../message/message.model';
import { uuid } from '../../shared/utils';

/**
 * Thread represents a group of Users exchanging Messages
 */
 export class Thread {
   id: string;
   lastMessage: Message;
   name: string;
   avatarSrc: string;

   constructor(id?: string,
               name?: string,
               avatarSrc?: string) {
     this.id = id || uuid();
     this.name = name;
     this.avatarSrc = avatarSrc;
   }
 }
