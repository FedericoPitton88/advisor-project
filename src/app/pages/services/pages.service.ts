import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  constructor(private httpClient: HttpClient) {}
  private baseUrl = 'https://gateway.marvel.com:443/v1/public';

  getCharacters(): Observable<any> {
    const url = `${this.baseUrl}/characters?limit=100`;
    return this.httpClient.get(url);
  }

  getCharacterDetail(id: string) {
    const url = `${this.baseUrl}/characters/${id}`;
    return this.httpClient.get(url);
  }

  getComics(): Observable<any> {
    const url = `${this.baseUrl}/comics?limit=100`;
    return this.httpClient.get(url);
  }

  getComicsDetail(id: string) {
    const url = `${this.baseUrl}/comics/${id}`;
    return this.httpClient.get(url);
  }
}
