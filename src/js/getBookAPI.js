
<<<<<<< HEAD
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
=======
>>>>>>> 6ad3eaf5a7c3430589c3c2fbd11dad7ddaf3e2d7
