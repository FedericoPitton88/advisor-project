import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  private API_KEY = 'AIzaSyAQS9csJgXuBXaYhu9QjNHz7rFvL8fo7Gg';

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string):Observable<any>{
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_KEY}`;
    const data = {
      email,
      password,
      returnSecureToken: true
    };

    return this.httpClient.post<any>(url, data);
  }
}
