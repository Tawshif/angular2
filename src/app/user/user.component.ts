import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
@Component({
	moduleId:module.id,
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[PostsService]
})

export class UserComponent {
	name : string;
	email : string;
	address: address;
	hobbies : string[];
	showHobbies: boolean;
	posts: Post[];

  constructor( private postsService: PostsService ) {
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

		this.postsService.getPosts().subscribe(posts => {
			console.log(posts)
			this.posts = posts;
		});
  }

  toggleHobbies(){

  	if(this.showHobbies == true) {
  		this.showHobbies = false;
  	}else {
  		this.showHobbies = true;
  	}
  }
  addHobby(hobby){
  	console.log(hobby);
  	this.hobbies.push(hobby);
  }
  deleteHobby(i){
  	console.log(i);
  	this.hobbies.splice(i, 1);
  }
}

interface  address {
	street: string;
	city: string;
	state: string;
}

interface Post {
	userId: number,
	id:number,
	title: string,
	body:string
}