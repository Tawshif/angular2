import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {
	todos;

  constructor() { }

  ngOnInit() {
		this.todos = [
		{
			text: 'Pickup kids at school'
		},
		{
			text:'dinner with wife'
		},
		{
			text:'Go to Bed'
		}
  ];

}
}
