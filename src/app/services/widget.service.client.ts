export class WidgetServiceClient{

  WIDGET_URL = 'http://localhost:8080/api/course/CID/module/MID/lesson/LID/topic/TID/widget'

  findWidgetsForTopic(courseId, moduleId, lessonId, topicId){
    return fetch(this.WIDGET_URL
        .replace('CID',courseId)
        .replace('MID',moduleId)
        .replace('LID',lessonId)
        .replace('TID',topicId))
      .then(response => response.json())
  }

}
