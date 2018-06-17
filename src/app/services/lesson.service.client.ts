export class LessonServiceClient{

  LESSON_URL = 'http://localhost:8080/api/course/CID/module/MID/lesson'

  findLessonsForModule(courseId, moduleId) {
    return fetch(this.LESSON_URL.replace('CID', courseId).replace('MID', moduleId))
      .then(response => response.json())
  }

}
