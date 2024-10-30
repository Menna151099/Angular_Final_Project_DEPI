import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userKey = 'user';

  constructor() { }

  signUp(userData: any): void {
    console.log('User signed up with data:', userData);
    localStorage.setItem(this.userKey, JSON.stringify(userData));
  }

  login(email: string, password: string): boolean {
    const user = JSON.parse(localStorage.getItem(this.userKey) || 'null');

    if (user && user.email === email && user.password === password) {
      return true;
    }
    return false; 
  }
}
