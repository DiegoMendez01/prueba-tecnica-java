import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { basicAuthInterceptor } from './interceptors/basic-auth.interceptor';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideHttpClient(
      withInterceptors([basicAuthInterceptor])
    ),
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
