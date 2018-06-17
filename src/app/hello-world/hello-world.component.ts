import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  courseTitle;
  message = 'Welcome to MEAN stack module';
  courses = [
    {title: 'CS5010', id: 1},
    {title: 'CS5340', id: 2},
    {title: 'CS5610', id: 3},
    {title: 'CS6350', id: 4}
  ];

  deleteCourse(courseId) {
    this.courses = this.courses.filter(course => course.id !== courseId);
  }

  addCourse(courseName) {
    this.courses.push({
      title: courseName,
      id: courseName
    });
    this.courseTitle = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
