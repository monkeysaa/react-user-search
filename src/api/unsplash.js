import axios from 'axios';

// const searchImages = (term) => {

// }

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID By9u1-xPR1x2JTSOWkQEkboV5-mb09FJxJBSk3drlfM'
  }
});
