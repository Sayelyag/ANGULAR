import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  username = '';
  password = '';
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  async login(): Promise<void> {
    this.errorMessage = '';

    try {
      await this.authService.login(this.username, this.password);
      await this.router.navigate(['/home']);
    } catch (error) {
      this.errorMessage = 'Usuario o contraseña incorrectos.';
      console.error('Error al iniciar sesión', error);
    }
  }
}
