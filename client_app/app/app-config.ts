import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.config');

export interface AppConfig {
  apiEndpoint: string;
  title: string;
  chatApiUrl: string;
  socketUrl: string;
}

export const AKVILOR_CONFIG: AppConfig = {
  // apiEndpoint: '//localhost:3000/api',
  apiEndpoint: 'app/',
  title: 'akvilor',
  chatApiUrl: 'http://localhost:9000/api/',
  socketUrl: 'http://localhost:9000'
}
