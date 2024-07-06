import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl= 'https://jsonplaceholder.typicode.com';

  constructor(private http:HttpClient) { }
  getTodo(): Observable<Todo[]> {
    console.log('sunny');
    return this.http.get<Todo[]>(`${this.baseUrl}/todos`);
  }

}
