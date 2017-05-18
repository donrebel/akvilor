import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class IoService {

  constructor() {
  }

  get() {
    if (typeof io === 'undefined') {
      throw new Error('Socket.io required');
    }
    return io;
  }
}
