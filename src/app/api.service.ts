import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cat } from './models';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private httpClient: HttpClient) { }

 public getAll() {
   return this.httpClient.get('https://aws.random.cat/meow');
 }
}