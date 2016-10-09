import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatRoomComponent } from './chat-room/chat-room.component';

const chatRoutes: Routes = [
  { path: '', redirectTo: 'room', pathMatch: 'full' },
  { path: 'room/:roomId', component: ChatRoomComponent },
  { path: 'room', component: ChatRoomComponent }
];

export const chatRouting: ModuleWithProviders = RouterModule.forChild(chatRoutes);
