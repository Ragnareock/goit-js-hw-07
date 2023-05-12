import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListEl = document.querySelector('.gallery');

function createImageCardsMarkup(item) {
  return item
    .map(({ preview, original, description }) => {
      return `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img 
      class="gallery__image"
      src="${preview}" 
      alt="${description}" 
      />
   </a>
</li>
        `;
    })
    .join('');
}

galleryListEl.innerHTML = createImageCardsMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
