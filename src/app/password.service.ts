import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  checkPasswordStrength(password: string): number {
    // Здесь вы можете реализовать логику проверки пароля на надежность.
    // Верните число от 0 до 2 в зависимости от сложности пароля.
    // 0 - слабый, 1 - средний, 2 - сильный
    return password.length >= 8 ? 2 : password.length >= 5 ? 1 : 0;
  }

  constructor() { }
}