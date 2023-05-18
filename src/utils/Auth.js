import { baseUrl } from './constants';
import axios from 'axios';

class Auth {
  constructor(baseUrl) {
    this._addressAuth = baseUrl;
  }

  _handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  };

  register(email, password) {
    return axios.post(`${this._addressAuth}/signup`, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'email': email,
        'password': password
      })
    })
      .then(this._handleResponse);
  }

  login(email, password) {
    return axios.post(`${this._addressAuth}/signin`, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'email': email,
        'password': password
      })
    })
      .then(this._handleResponse);
  }

  getContent(token) {
    return axios.get(`${this._addressAuth}/users/me`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => data);
  }
}

const auth = new Auth(baseUrl);
export default auth;

