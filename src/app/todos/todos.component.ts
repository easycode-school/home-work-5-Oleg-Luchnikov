import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public todoItems: string[] = [];
  constructor() { }

  ngOnInit() {
  }

  addTodoHandler($event) {
    this.todoItems.push($event);
  }
}
