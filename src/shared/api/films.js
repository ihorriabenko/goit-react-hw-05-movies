import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '196da2d2dd4f95fd9bfe0927ab5d4d33',
    language: 'en-US'
   }
});

export const getFilms = async () => {
  const { data } = await instance.get('trending/all/day');
  return data;
};

export const fetchFilmsWithId = async id => {
  const response = await instance.get(`/movie/${id}`);
  return response;
};

export const fetchFilmsWithQuery = async searchQuery => {
  const response = await instance.get(`/search/movie?&page=1&include_adult=false&query=${searchQuery}`)
  return response;
}

export const fetchCastWithId = async id => {
  const response = await instance.get(`/movie/${id}/credits`);
  return response;
}

export const fetchReviewsWithId = async id => {
  const response = await instance.get(`/movie/${id}/reviews`);
  return response;
}
