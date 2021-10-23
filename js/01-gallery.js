import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryFind = document.querySelector(".gallery");
const imageViewAll = createImagesAll(galleryItems);
galleryFind.insertAdjacentHTML('beforeend', imageViewAll);

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



galleryFind.addEventListener('click', modalOpen);
function modalOpen(event) {
    event.preventDefault();
 
    const targetImg = event.target.nodeName === 'IMG';
    if (!targetImg) {
        return;
    }

    const instance = basicLightbox.create(
    `<div class="modal">
        <img src = ${event.target.dataset.source}
        alt = ${event.target.alt}
        width = "1024"
        height = "683"/>
    </div>`,
    {onShow: instance => {
        instance.element().querySelector('IMG').onclick = instance.close;
        window.addEventListener('keydown', eventHandler);
      },
      onClose: instance => {
        window.removeEventListener('keydown', eventHandler);
      },
    },
  );
  function eventHandler(event) {
    if (event.key === 'Escape') {
      instance.close();
      return;
    }
  }
  instance.show();
}


