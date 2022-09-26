import axios from 'axios';

class ServerAuth {
  constructor () {
    this.baseURL = 'http://localhost:3001/api/v1/';
  }

  getToken (email, password) {
    return axios.post(`${this.baseURL}user/login`, {
      email, password
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    );
  }

  getProfile (token) {
    return axios.post(
      `${this.baseURL}user/profile`, 
      { token },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    );
  }
}

export default ServerAuth;