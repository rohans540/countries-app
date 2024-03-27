import { Injectable } from '@angular/core';
import { ROLES } from '../constants/roles';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserRole: string | null = null;

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this.currentUserRole = ROLES.ADMIN;
      return true;
    } else if (username === 'operator' && password === 'operator') {
      this.currentUserRole = ROLES.OPERATOR;
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUserRole = null;
    this.router.navigate(['/login'])
  }

  getCurrentUserRole(): string | null {
    return this.currentUserRole;
  }
  
  isAuthenticated(): boolean {
    return this.currentUserRole !== null;
  }
}
