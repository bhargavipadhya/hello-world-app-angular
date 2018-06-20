export class EnrollmentServiceClient{

  findAllEnrollments(){
    return fetch("http://localhost:3000/api/section",{
      credentials:'include'
    })
      .then(response=>response.json());
  }

}
