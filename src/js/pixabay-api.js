import axios from 'axios';

const apiKey = '44774243-c5238725a8321193973133c91';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 15) {
  try {
    const response = await axios.get('', {
      params: {
        key: apiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: perPage,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
