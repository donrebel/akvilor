import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ChatComponent } from './chat.component';
import { ChatContainerTmp } from './chat-container-tmp.component';

const chatRoutes: Routes = [
    // {path: 'chat', component: ChatComponent, outlet: 'chat' }
    {path: 'chat', component: ChatContainerTmp, outlet: 'chat' }
]

@NgModule({
  imports: [
    RouterModule.forChild(chatRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ChatRoutingModule {}
