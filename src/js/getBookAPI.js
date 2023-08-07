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
}
