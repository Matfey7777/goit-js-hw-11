import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.load-wrapper');

const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const markup = images.map(image => {
    return `<div>
  <a href="${image.largeImageURL}">
    <img src="${image.webformatURL}" alt="${image.tags}">
  </a>
  <div>
    <p>Likes: ${image.likes}</p>
    <p>Views: ${image.views}</p>
    <p>Comments: ${image.comments}</p>
    <p>Downloads: ${image.downloads}</p>
  </div>
</div>`;
  });

  gallery.innerHTML = markup.join('');
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.style.display = 'flex';
}

export function hideLoader() {
  loader.style.display = 'none';
}
