/* eslint-disable linebreak-style */
const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://androidflix.herokuapp.com';

export default {
  URL,
};
