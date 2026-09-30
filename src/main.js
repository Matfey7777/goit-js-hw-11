import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const query = form.elements['search-text'].value;

  if (!query.trim()) {
    return;
  }

  clearGallery();
  showLoader();
  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        hideLoader();
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }
      createGallery(data.hits);
      hideLoader();
    })
    .catch(() => {
      hideLoader();
      iziToast.error({
        message: 'Something went wrong. Please try again later.',
      });
    });
}
