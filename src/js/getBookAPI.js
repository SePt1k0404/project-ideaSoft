import axios from 'axios';
import Notiflix from 'notiflix';

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
async function getTopBooksArray() {
  Notiflix.Loading.dots();
  const categoriesArray = async () => {
    const response = await fetch(
      'https://books-backend.p.goit.global/books/top-books'
    );
    const data = await response.json();
    Notiflix.Loading.remove();
    return data;
  };
  try {
    return categoriesArray();
  } catch (error) {
    Notiflix.Loading.remove();
    Notiflix.Notify.failure(
      'Ups......... Something went wrong. Please try again'
    );
  }
}

export { getTopBooksArray };
