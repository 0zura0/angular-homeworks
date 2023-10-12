import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'https://v6.exchangerate-api.com/v6/c72de7cf0f9b3538879b2c1d/latest/USD'; // Replace with your API key

  constructor(private http: HttpClient) { }

  getExchangeRates(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
