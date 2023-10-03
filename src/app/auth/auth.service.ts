import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDqoJywie1MHFZQyU6h8o29mC6lsUOCWGo',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((errorRes: any) => {
          let errorMes = 'An unkown error occured';
          if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMes);
          }
          switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMes = 'This email exists already';
          }
          return throwError(errorMes);
        })
      );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDqoJywie1MHFZQyU6h8o29mC6lsUOCWGo',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}
