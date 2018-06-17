import { Component, OnInit } from '@angular/core';
import {CourseNavigatorServiceClient} from '../services/course-navigator.service.client';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  constructor(private service: CourseNavigatorServiceClient) { }


  courses = [];
  modules = [];
  lessons = [];
  topics = [];
  courseId;
  moduleId;
  lessonId;

  selectCourse(courseId) {
    this.service.findModulesForCourse(courseId)
      .then(modules => this.modules = modules)
      this.courseId = courseId;
  }

  selectModule(moduleId) {
    this.service.findLessonsForModule(this.courseId, moduleId)
      .then(lessons => this.lessons = lessons);
    this.moduleId = moduleId;
  }

  selectLesson(lessonId) {
    this.service.findTopicsForLesson(this.courseId, this.moduleId, lessonId)
      .then(topics => this.topics = topics);
    this.lessonId = lessonId;
  }

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
