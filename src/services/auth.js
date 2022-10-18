import axios from 'axios';

class ServerAuth {
  constructor () {
    this.baseURL = 'http://localhost:3001/api/v1/';
  }

  async getToken (email, password) {
    try {
      const response = await axios.post(`${this.baseURL}user/login`, {
        email, 
        password
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async getProfile (token) {
    try {
      const response = await axios.post(
        `${this.baseURL}user/profile`, 
        { token },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async putProfile (firstName, lastName, token) {
    try {
      const response = await axios.put(
        `${this.baseURL}user/profile`, 
        {
          firstName,
          lastName
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}

export default ServerAuth;