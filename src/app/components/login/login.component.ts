import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;
  isLoading: boolean = false;
  successMessage: string | null = null;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.errorMessage = null;
      this.successMessage = null;
      const { username, password } = this.loginForm.value;
      console.log('Login attempt with', username, password);
      // Simulate login process
      setTimeout(() => {
        this.isLoading = false;
        // Simulate login success for demonstration
        if (username === 'admin' && password === 'admin') {
          this.successMessage = 'Login successful!';
        } else {
          this.errorMessage = 'Invalid username or password';
        }
      }, 2000);
    } else {
      this.errorMessage = 'Please fill in all fields';
    }
  }
}
