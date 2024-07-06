import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-callservice',
  templateUrl: './callservice.component.html',
  styleUrl: './callservice.component.css'
})
export class CallserviceComponent implements OnInit{
  todos: Todo[] =[];

  constructor(private todoService: TodoService){}

  ngOnInit(): void {
    this.todoService.getTodo().subscribe((todos) => {
      console.log('sandy', this.todoService);
    this.todos = todos;
    });
    }
}
