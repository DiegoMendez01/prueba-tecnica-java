import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export const basicAuthInterceptor: HttpInterceptorFn = (req, next) => {
  const backendUrl = 'http://localhost:8080';
  if (!req.url.startsWith(backendUrl)) {
    return next(req);
  }

  const username = 'admin';
  const password = 'admin123';
  const basicAuth = 'Basic ' + btoa(`${username}:${password}`);

  const authReq = req.clone({
    setHeaders: {
      Authorization: basicAuth,
    },
  });

  return next(authReq);
};
