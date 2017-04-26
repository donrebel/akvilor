import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css']
})
export class ChatComponent {
  mode = 'chatList';

  constructor(
    public router: Router
  ) {
  }

  onChatWindowEvent(signal: string) {
    if (signal == "closeChat") {
      this.router.navigate([{ outlets: { chat: null }}]);
    } else if (signal == "openChatThreads") {
      this.mode = 'chatList'
    }
  }

  onOpenChatWindow() {
    this.mode = 'chatBody';
  }
}
