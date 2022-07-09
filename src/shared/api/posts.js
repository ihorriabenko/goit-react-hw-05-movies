import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/trending/all/day?api_key=196da2d2dd4f95fd9bfe0927ab5d4d33',
});

export const getPosts = async () => {
  const { data } = await instance.get();
  return data;
};

export const getPostById = async(id) => {
  const {data} = await instance.get(`/${id}`)
  return data;
}

// ;(async () => {
//   const response = await axios({
//     url: 'https://api.themoviedb.org/3/trending/all/day?api_key=196da2d2dd4f95fd9bfe0927ab5d4d33',
//     method: 'get'
//   })
// console.log(response)
// })()
