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

  findSectionsForStudent(){
    const url = 'http://localhost:3000/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  findSectionsForCourse(courseId){
    return fetch(this.SECTION_URL.replace('CID',courseId))
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId){
    const section_url = 'http://localhost:3000/api/section/' + sectionId + '/enrollment';
    return fetch(section_url, {
      method: 'post',
      credentials: 'include'
    });
  }

  disenrollStudent(sectionId){
    return fetch('http://localhost:3000/api/student/section/SID'.replace("SID",sectionId),{
      method:'delete',
      credentials:'include'
    })
  }

}
