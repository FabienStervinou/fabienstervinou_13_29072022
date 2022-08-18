import axios from 'axios';

class ServerAuth {
  constructor() {
    this.baseURL = 'http://localhost:3001/api/v1/';
  }

  getToken(email, password) {
    return axios.post(`${this.baseURL}user/login`, {
      email, password
    },
    {
      'Content-Type': 'application/json',
    }
    );
  }
}

export default ServerAuth;