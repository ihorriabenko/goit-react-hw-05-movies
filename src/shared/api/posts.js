import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/trending/all/day?api_key=196da2d2dd4f95fd9bfe0927ab5d4d33',
});

export const getPosts = async () => {
  const { data } = await instance.get();
  return data;
};

export const fetchPostsWithId = async id => {
  const response = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=196da2d2dd4f95fd9bfe0927ab5d4d33&language=en-US`);
  return response;
};

export const fetchPostsWithQuery = async searchQuery => {
  const response = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=196da2d2dd4f95fd9bfe0927ab5d4d33&language=en-US&page=1&include_adult=false&query=${searchQuery}`)
  return response;
}

export const fetchCastWithId = async id => {
  const response = axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=196da2d2dd4f95fd9bfe0927ab5d4d33&language=en-US`);
  return response;
}

export const fetchReviewsWithId = async id => {
  const response = axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=196da2d2dd4f95fd9bfe0927ab5d4d33&language=en-US`);
  return response;
}

// ;(async () => {
//   const response = await axios({
//     url: 'https://api.themoviedb.org/3/movie/616047?api_key=196da2d2dd4f95fd9bfe0927ab5d4d33&language=en-US',
//     method: 'get'
//   })
// console.log(response)
// })()
