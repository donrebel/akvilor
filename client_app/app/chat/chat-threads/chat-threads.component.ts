import {
  Component,
  // OnInit,
  // Inject
  Output,
  EventEmitter
} from '@angular/core';
import { Observable } from 'rxjs';
import { Thread } from '../thread/thread.model';
import { ThreadsService } from './../thread/threads.service';

@Component({
  moduleId: module.id,
  selector: 'chat-threads',
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.css']
})
export class ChatThreadsComponent {
  threads: Observable<any>;
  @Output() openChatWindow = new EventEmitter()

  constructor(public threadsService: ThreadsService) {
    this.threads = threadsService.orderedThreads;
  }

  onClick() {
    this.openChatWindow.emit()
  }
}
