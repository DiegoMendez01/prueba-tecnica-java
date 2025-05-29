import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly storageKey = 'basicAuthCredentials';
  login(username: string, password: string): void {
    const basicAuth = 'Basic ' + btoa(`${username}:${password}`);
    localStorage.setItem(this.storageKey, basicAuth);
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
  }

  getAuthHeader(): string | null {
    if (typeof window === 'undefined') {
      return null;
    }
    return localStorage.getItem(this.storageKey);
  }

  isLoggedIn(): boolean {
    if (typeof window === 'undefined') {
      return false;
    }
    return this.getAuthHeader() !== null;
  }
}
