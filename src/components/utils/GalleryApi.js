import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const PixabayApi = async (query, page) => {
  const response = await axios.get(``, {
    params: {
      q: query,
      page,
      key: '30342028-2b0f208511d1ff42beafaf97c',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return response;
};

// export default function fetchGallery(name, page) {
//   const baseURL = 'https://pixabay.com/api';
//   const API_KEY = '30342028-2b0f208511d1ff42beafaf97c';
//   return fetch(
//     `${baseURL}/?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   ).then(res => {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(
//       new Error(`Изображение по запросу ${this.props.name} не найдено!`)
//     );
//   });
// }
