export class UserServiceClient{

  createUser(username, password){
    const user = {
      username: username,
      password: password
    };
    return fetch('http://localhost:3000/api/user', {
      body: JSON.stringify(user),
      headers: {'content-type': 'application/json'},
      method: 'post',
      credentials: 'include'
    });
  }

  login(username, password){
    const credentials = {
      username: username,
        password: password
    }
    return fetch('http://localhost:3000/api/login', {
      credentials: 'include',
      body: JSON.stringify(credentials),
      headers: {'content-type': 'application/json'},
      method: 'post'
    })
  }

  logout(){
    return fetch('http://localhost:3000/api/logout', {
      credentials: 'include',
      method: 'post'
    });
  }

  profile(){
    return fetch('http://localhost:3000/api/profile', {credentials: 'include'})
      .then(response => response.json());
  }

  findUserById(userId){
    return fetch('http://localhost:3000/api/user' + '/' + userId, {credentials: 'include'})
      .then(response => response.json());
  }

}

