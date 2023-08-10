import axios from 'axios';
import Notiflix from 'notiflix';
import { refs } from './refs';

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
  refs.loaderEl.classList.add('is-active');
  refs.footer.classList.add('visually-hidden');
  refs.topBooksWrapper.classList.add('visually-hidden');
  refs.supportAllCategoriesWrapper.classList.add('visually-hidden');
  const topBooks = async () => {
    const response = await fetch(
      'https://books-backend.p.goit.global/books/top-books'
    );
    const data = await response.json();
    refs.loaderEl.classList.remove('is-active');
    refs.footer.classList.remove('visually-hidden');
    refs.topBooksWrapper.classList.remove('visually-hidden');
    refs.supportAllCategoriesWrapper.classList.remove('visually-hidden');
    return data;
  };
  try {
    return topBooks();
  } catch (error) {
    refs.loaderEl.classList.remove('is-active');
    refs.footer.classList.remove('visually-hidden');
    refs.topBooksWrapper.classList.remove('visually-hidden');
    refs.supportAllCategoriesWrapper.classList.remove('visually-hidden');
    Notiflix.Notify.failure(
      'Ups......... Something went wrong. Please try again'
    );
  }
}

export async function booksOnCategory(nameCategory) {
  const categories = async () => {
    refs.loaderEl.classList.add('is-active');
    refs.footer.classList.add('visually-hidden');
    refs.topBooksWrapper.classList.add('visually-hidden');
    refs.supportAllCategoriesWrapper.classList.add('visually-hidden');
    const response = await fetch(
      `https://books-backend.p.goit.global/books/category?category=${nameCategory}`
    );
    const data = await response.json();
    refs.loaderEl.classList.remove('is-active');
    refs.footer.classList.remove('visually-hidden');
    refs.topBooksWrapper.classList.remove('visually-hidden');
    refs.supportAllCategoriesWrapper.classList.remove('visually-hidden');
    return data;
  };
  try {
    return categories();
  } catch (error) {
    refs.loaderEl.classList.remove('is-active');
    refs.footer.classList.remove('visually-hidden');
    refs.topBooksWrapper.classList.remove('visually-hidden');
    refs.supportAllCategoriesWrapper.classList.remove('visually-hidden');
    Notiflix.Notify.failure(
      'Ups......... Something went wrong. Please try again'
    );
  }
}
