import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseWebAPIHttpService {
  protected baseUrl = 'https://api.example.com';

  constructor(protected http: HttpClient) {}

  protected get<T>(url: string, options?: any): Observable<T> {
    // @ts-ignore
    return this.http.get<T>(`${this.baseUrl}/${url}`, options);
  }

  protected post<T>(url: string, body: any, options?: any): Observable<T> {
    // @ts-ignore
    return this.http.post<T>(`${this.baseUrl}/${url}`, body, options);
  }

  protected put<T>(url: string, body: any, options?: any): Observable<T> {
    // @ts-ignore
    return this.http.put<T>(`${this.baseUrl}/${url}`, body, options);
  }

  protected delete<T>(url: string, options?: any): Observable<T> {
    // @ts-ignore
    return this.http.delete<T>(`${this.baseUrl}/${url}`, options);
  }
}
