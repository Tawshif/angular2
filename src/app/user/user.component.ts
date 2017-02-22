import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
	name : string;
	email : string;
	address: address;
	hobbies : string[];
	showHobbies: boolean;

  constructor() {

  	this.name = 'Sam Smith';
		this.name = 'john';
		this.email = 'john@gmail.com';
		this.address = {
			street:'12 Main st',
			city:'Boston',
			state:'MA'
		};
		this.hobbies = ['music','movies','sports'];
		this.showHobbies = false;
  }

  toggleHobbies(){

  	if(this.showHobbies == true) {
  		this.showHobbies = false;
  	}else {
  		this.showHobbies = true;
  	}
  }
}

interface  address {
	street: string;
	city: string;
	state: string;
}
