import axios from 'axios';
const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID nW4REpe-KZnJvhUKL_1v9rEe6p9ezMKK0KV_-1Jr5Jk',
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;