import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rate } from '../interface/rate';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RatesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getRates(): Observable<Rate[]> {
    return this.http.get<Rate[]>(this.apiUrl);
  }
}
