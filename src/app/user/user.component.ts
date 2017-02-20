import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

	name : string;
	email : string;
	address: address;
	hobbies : string[];

  constructor() {
  	this.name = 'Sam Smith';
		this.name = 'john';
		this.email = 'john@gmail.com';
		this.address = {
			street:'12 Main st',
			city:'Boston',
			state:'MA'
		}
		this.hobbies = ['music','movies','sports'];
  }

  interface address {
  	street: string;
  	city: string;
  	state: string;
  }

}
