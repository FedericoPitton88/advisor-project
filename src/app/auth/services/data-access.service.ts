import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../../interface/authResponse.model';
import { User } from 'src/app/interface/user.models';

@Injectable({
  providedIn: 'root',
})
export class DataAccessService {
  timeoutInterval: any;
  private API_KEY = 'AIzaSyAQS9csJgXuBXaYhu9QjNHz7rFvL8fo7Gg';

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<AuthResponse> {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword`;
    const data = {
      email,
      password,
      returnSecureToken: true,
    };

    return this.httpClient.post<AuthResponse>(url, data);
  }

  signUp(email: string, password: string): Observable<AuthResponse> {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp`;
    const data = {
      email,
      password,
      returnSecureToken: true,
    };
    return this.httpClient.post<AuthResponse>(url, data);
  }

  logout() {
    localStorage.removeItem('user');
  }

  getUserFromLocalStorage(): User | null {
    const userDataString = localStorage.getItem('user');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const expirationDate = new Date(userData.expirationDate);
      const user = new User(
        userData.email,
        userData.token,
        userData.localId,
        expirationDate
      );
      return user;
    }
    return null;
  }

  formatUser(data: AuthResponse) {
    const expirationDate = new Date(
      new Date().getTime() + +data.expiresIn * 1000
    );
    const user = new User(
      data.email,
      data.idToken,
      data.localId,
      expirationDate
    );
    return user;
  }

  getErrorMessage(message: string) {
    let formattedMessage = message.replace(/_/g, ' ').toLowerCase();

    formattedMessage = formattedMessage.replace(/\b(\w)/g, (match) =>
      match.toUpperCase()
    );

    return formattedMessage;
  }
}
