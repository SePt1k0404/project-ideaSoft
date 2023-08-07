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

export async function getTopBooks() {
  Notiflix.Loading.dots();
  const topBooks = async () => {
    const response = await fetch(
      'https://books-backend.p.goit.global/books/top-books'
    );
    const data = await response.json();
    Notiflix.Loading.remove();
    return data;
  };
  try {
    return topBooks();
  } catch (error) {
    Notiflix.Loading.remove();
    Notiflix.Notify.failure(
      'Ups......... Something went wrong. Please try again'
    );
  }
}

export async function booksOnCategory(nameCategory) {
  Notiflix.Loading.dots();
  const categories = async () => {
    const response = await fetch(
      `https://books-backend.p.goit.global/books/category?category=${nameCategory}`
    );
    const data = await response.json();
    Notiflix.Loading.remove();
    return data;
  };
  try {
    Notiflix.Loading.remove();
    return categories();
  } catch (error) {
    Notiflix.Loading.remove();
    Notiflix.Notify.failure(
      'Ups......... Something went wrong. Please try again'
    );
  }
}
