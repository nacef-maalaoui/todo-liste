import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //etape 1
  url = 'http://127.0.0.1:3000/todo/';

  //etape 2
  constructor(private http : HttpClient) { }
}
