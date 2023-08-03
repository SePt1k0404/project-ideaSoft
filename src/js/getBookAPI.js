import axios from 'axios';

export default class ApiClientAxios {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async getDates() {
    try {
      const response = await axios.get(`${this.baseURL}`);
      return response.data;
    } catch (error) {
      throw new Error('Ups.........');
    }
  }

  //  FOR EXAMPLE + YOU NEED TO ADD (TRY AND CATCH)
  // async exampel(endpoint, params) {
  //   const response = await axios.get(`${this.baseURL}/${endpoint}`, {
  //     params,
  //   });
  //   return response.data;
  // }
}
