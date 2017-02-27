import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.config');

export interface AppConfig {
  apiEndpoint: string;
  title: string;
}

export const AKVILOR_CONFIG: AppConfig = {
  // apiEndpoint: '//localhost:3000/api',
  apiEndpoint: 'app/',
  title: 'akvilor'
}
