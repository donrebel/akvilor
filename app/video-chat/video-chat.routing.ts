import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatRoomComponent } from './chat-room';

const routes: Routes = [
  { path: '', redirectTo: 'room/', pathMatch: 'full' },
  { path: 'room/:roomId', component: ChatRoomComponent },
  { path: 'room/', component: ChatRoomComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
