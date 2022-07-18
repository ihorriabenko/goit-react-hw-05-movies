import axios from 'axios';

const apiKEY = '196da2d2dd4f95fd9bfe0927ab5d4d33';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export const getPosts = async () => {
  const { data } = await instance.get(`trending/all/day?api_key=${apiKEY}`);
  return data;
};

export const fetchPostsWithId = async id => {
  const response = await instance.get(`/movie/${id}?api_key=${apiKEY}&language=en-US`);
  return response;
};

export const fetchPostsWithQuery = async searchQuery => {
  const response = await instance.get(`/search/movie?api_key=${apiKEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`)
  return response;
}

export const fetchCastWithId = async id => {
  const response = await instance.get(`/movie/${id}/credits?api_key=${apiKEY}&language=en-US`);
  return response;
}

export const fetchReviewsWithId = async id => {
  const response = await instance.get(`/movie/${id}/reviews?api_key=${apiKEY}&language=en-US`);
  return response;
}
