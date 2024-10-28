import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private authService: AuthService) {}

  onSubmit(signUpForm: any) {
    if (signUpForm.valid) {
      this.authService.signUp(signUpForm.value).subscribe({
        next: (response) => {
          console.log('User signed up successfully', response);
        },
        error: (error) => {
          console.error('Error during sign up', error);
        },
        complete: () => {
          console.log('Sign up process completed');
        }
      });
    }
  }
}


