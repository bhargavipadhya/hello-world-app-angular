export class SectionServiceClient{

  SECTION_URL = 'http://localhost:3000/api/course/CID/section';

  createSection(courseId,seats,sectionName){

    const section = {courseId, seats, sectionName};

    return fetch(this.SECTION_URL.replace('CID',courseId), {
      method: 'post',
      headers: {'content-type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify(section)
    });
  }

  findSectionsForCourse(courseId){
    return fetch(this.SECTION_URL.replace('CID',courseId))
      .then(response => response.json());
  }

}
