import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  moduleId: module.id,
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css']
})
export class ChatComponent {
  mode = 'chatList'

  constructor(private router: Router) {

  }

  openChatBody(id: string) {
    this.mode = 'chatBody'
  }

  closeChatBody() {
    this.mode = 'chatList'
  }

  closeChatWindow() {
    this.router.navigate([{ outlets: { chat: null }}]);
  }
}
