import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})

export class TodoFormComponent implements OnInit {
  public toDoDescrInput;
  constructor() {}

  ngOnInit() {}
  @ViewChild('myForm') form;
  @Output() addTodo = new EventEmitter<string>();
  addNewTodo(form: NgForm) {
    this.addTodo.emit(this.toDoDescrInput);
    this.form.resetForm();
  }
}
