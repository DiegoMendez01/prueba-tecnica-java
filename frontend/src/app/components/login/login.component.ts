import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (this.username === 'admin' && this.password === 'admin123') {
      this.authService.login(this.username, this.password);
      this.errorMessage = null;
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}
