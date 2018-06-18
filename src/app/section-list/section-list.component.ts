import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private service: SectionServiceClient,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(params=>this.setParams(params))
  }

  courseId;
  sectionName;
  seats;
  sections = [];
  setParams(params){
    this.courseId = params['courseId'];
    this.loadSections(this.courseId);
  }

  loadSections(courseId){
    this.courseId = courseId;
    this.service.findSectionsForCourse(courseId)
      .then(sections => this.sections = sections)
  }

  createSection(seats, sectionName){
    this.service.createSection(this.courseId, seats, sectionName)
      .then(response => response.json())
      .then(() => {
        this.loadSections(this.courseId);
      });
  }

  enroll(section){
    this.service.enrollStudentInSection(section._id)
      .then(() => {
        this.router.navigate(['profile']);
      });
  }

  ngOnInit() {
  }

}
