export class CourseNavigatorServiceClient {
  findAllCourses() {
    return fetch('http://localhost:8080/api/course')
      .then(response => response.json());
  }

  findModulesForCourse(courseId) {
    return fetch('http://localhost:8080/api/course/' + courseId + '/module')
      .then(response => response.json());
  }

  findLessonsForModule(courseId, moduleId) {
    return fetch('http://localhost:8080/api/course/' + courseId + '/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }

  findTopicsForLesson(courseId, moduleId, lessonId) {
    return fetch('http://localhost:8080/api/course/' + courseId + '/module/' + moduleId + '/lesson/' + lessonId + '/topic')
      .then(response => response.json());
  }
}
