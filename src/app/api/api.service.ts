import { Observable } from 'rxjs';

import { Injectable, Optional, Inject } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { APP_BASE_HREF } from '@angular/common';

@Injectable()
export class ApiService {
  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    @Optional() @Inject(APP_BASE_HREF) origin: string
  ) {
    if (origin) this.apiUrl = `${origin}${this.apiUrl}`;
  }

  get<T>(path: string, options?: {headers: HttpHeaders}): Observable<T> {
    return this.http.get<T>(this.apiUrl + path, options);
  }

  post<T>(path: string, object: any, options?: {headers: HttpHeaders}): Observable<T> {
    return this.http.post<T>(this.apiUrl + path, object, options);
  }

  patch<T>(path: string, object: any, options?: {headers: HttpHeaders}): Observable<T> {
    return this.http.patch<T>(this.apiUrl + path, object, options);
  }

  delete<T>(path: string, options?: { headers: HttpHeaders}): Observable<T> {
    return this.http.delete<T>(this.apiUrl + path, options);
  }

}
