import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryFind = document.querySelector(".gallery");

function createImagesAll(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
<a
  class="gallery__link"
  href='${original}'
>
  <img
    class="gallery__image"
    src='${preview}'
    data-source='${original}'
    alt='${description}'
  />
</a>
</li>`;
    })
    .join('');
}

const imageViewAll = createImagesAll(galleryItems);
galleryFind.insertAdjacentHTML('beforeend', imageViewAll);

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});