import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}

  onSubmit(form: NgForm): void {
    const { email, password } = form.value;

    if (this.authService.login(email, password)) {
      console.log('Login successful');
      this.router.navigate(['/home']);
    } else {
      console.error('Login failed: Invalid credentials');
    }
  }
}
