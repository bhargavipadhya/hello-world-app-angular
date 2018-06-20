import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private router: Router,
              private sectionService: SectionServiceClient,
              private enrollmentService: EnrollmentServiceClient) { }

  user: User = new User();

  sections = [];
  enrollments =[];
  updateUser(){
    this.service.updateUser(this.user)
      .then(()=>this.service.findCurrentUser())
      .then(user => this.user = user)
  }

  disenroll(enrollment){
    this.sectionService.disenrollStudent(enrollment.section._id)
      .then(()=>this.enrollmentService.findAllEnrollments())
      .then(enrollments => this.enrollments = enrollments);
  }

  logout(){
    this.service.logout()
      .then(() => this.router.navigate(['login']));
  }

  ngOnInit() {
    this.service
      .profile()
      .then(user => this.user = user);

    this.sectionService.findSectionsForStudent()
      .then(sections => this.sections = sections);
  }

}
