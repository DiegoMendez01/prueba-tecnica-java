import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const basicAuthInterceptor: HttpInterceptorFn = (req, next) => {
  const backendUrl = 'http://localhost:8080';
  if (!req.url.startsWith(backendUrl)) {
    return next(req);
  }

  const authService = new AuthService();
  const basicAuth = authService.getAuthHeader();

  if (!basicAuth) {
    return next(req);
  }

  const authReq = req.clone({
    setHeaders: {
      Authorization: basicAuth,
    },
  });

  return next(authReq);
};
