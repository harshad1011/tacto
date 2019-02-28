import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private serverUrl = "http://localhost:3210";
  constructor(private http: HttpClient) { }

  getData(url: string, params: any) {
    return this.http.get(this.serverUrl + url, { params: params });
  }

  postData(url: string, body: Object) {
    return this.http.post(this.serverUrl + url, body);
  }
}
