// import { Injectable, Inject } from '@angular/core';
// import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import * as CryptoJS from 'crypto-js';
// @Injectable()
// export class MainInterceptor implements HttpInterceptor {

//   constructor(@Inject('API_KEY') private apiKey: string, @Inject('API_SECRET') private apiSecret: string) {}
//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     if (request.url.includes('https://identitytoolkit.googleapis.com')) {
//       const modifiedRequest = request.clone({
//         setParams: { key: environment.firebase.apiKey },
//       });

//       return next.handle(modifiedRequest);
//     }
//     if (request.url.includes('https://gateway.marvel.com')) {
//       const ts = new Date().getTime().toString();
//       const originalString = ts + this.apiSecret + this.apiKey;
//       const hash = CryptoJS.MD5(originalString).toString();

//       const authReq = request.clone({
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json'
//         }),
//         setParams: {apikey: this.apiKey, hash: hash, ts: ts}
//       });

//       return next.handle(authReq);
//     }
//     return next.handle(request);
//   }
// }
