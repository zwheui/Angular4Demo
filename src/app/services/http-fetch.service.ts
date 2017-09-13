import { Injectable } from '@angular/core';
import { API_URL } from '../common/const';

@Injectable()
export class HttpFetchService {
  constructor() { }

  async getJSON(name) {
    const url = `assets/json/${name}.json?rand=${Math.random()}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getHttp(resName, formData = null) {
    const url = `${API_URL}${resName}`;
    const header = {
      method: 'get',
      headers: {
        // Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await fetch(url, header);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async postHttp(resName, formData) {
    const url = `${API_URL}${resName}`;

    const header = {
      method: 'post',
      headers: {
        // Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    };

    try {
      const res = await fetch(url, header);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
