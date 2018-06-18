import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username;
  password;
  cpassword;
  register(username, password, cpassword){
    console.log([username, password, cpassword]);
    this.service.createUser(username, password)
      .then(()=> this.route.navigate(['profile']))

  }
  constructor(private route: Router, private service: UserServiceClient) {

  }

  ngOnInit() {
  }

}
