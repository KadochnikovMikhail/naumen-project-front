import axios from 'axios';
import { baseUrl } from '@/utils/constants.js';

class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUser(){
    return axios.get(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(this._getResponseData);
  }

  patchUserData(newData) {
    return axios.patch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newData.name,
        surname: newData.surname,
        telegram: newData.telegram,
      })
    })
      .then(this._getResponseData);
  }

  getDormitores() {
    return axios.get(`/${this._baseUrl}/dormitories`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((this._getResponseData))
      .catch(error => {
        console.error(error);
      });
  }


  getDormitory(dormitoryId) {
    return axios.get(`/${this._baseUrl}/dormitories/${dormitoryId}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(this._getResponseData)
      .catch(error => {
        console.error(error);
      });

  }

  addDormitory() {
    return axios.post(`/${this._baseUrl}/dormitories`, {
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((this._getResponseData))
      .catch(error => {
        console.error(error);
      });
  }

  uptadeDormitory(dormitoryId) {
    return axios.put(`/${this._baseUrl}/dormitories/${dormitoryId}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((this._getResponseData))
      .catch(error => {
        console.error(error);
      });
  }

  deleteDormitory(dormitoryId) {
    return axios.delete(`/${this._baseUrl}/dormitories/${dormitoryId}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(this._getResponseData)
      .catch(error => {
        console.error(error);
      });
  }
}

const api = new Api(baseUrl);

export default api;

