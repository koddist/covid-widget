import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CovidSummary } from './api.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  hostName = 'https://api.covid19api.com'

  constructor(private http: HttpClient) { }

  async getSummary() {
    return await this.http.get<Promise<CovidSummary>>(`${this.hostName}/summary`).toPromise();
  }
}
