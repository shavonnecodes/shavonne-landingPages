import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Joke } from './models';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Accept': 'application/json'
      }
    )
  }

 public getAll() {
   return this.httpClient.get('https://icanhazdadjoke.com/', this.httpOptions);
 }
}