import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
	todos;
	text;
  constructor() { }

  ngOnInit() {
  	this.todos = [
	  	{
	  		text: "pickup kids at school"
	  	},
	  	{
	  		text: "Meeting with some one"
	  	},
	  	{
	  		text: "dinner with wife"
	  	}
  	];
  }
  addTodo(){
  	console.log(this.text);
  }

}
