import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/AuthService.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe(
      (isLoggedIn: boolean) => {
        if (isLoggedIn) {
          // Redireccionar al usuario al dashboard u otra página autorizada
        } else {
          // Mostrar un mensaje de error al usuario o realizar alguna acción
        }
      }
    );
  }
}
