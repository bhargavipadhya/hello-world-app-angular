import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  login(username,password){
    console.log([username, password]);
    this.service.login(username, password)
      .then(()=>this.route.navigate(['profile']));

  }

  constructor(private route: Router, private service: UserServiceClient) { }

  ngOnInit() {
  }

}
