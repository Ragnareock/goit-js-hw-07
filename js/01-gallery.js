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
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
        `;
    })
    .join('');
}

galleryListEl.innerHTML = createImageCardsMarkup(galleryItems);

galleryListEl.addEventListener('click', onImageContainerClick);

function onImageContainerClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  galleryListEl.addEventListener('keydown', ({ code }) => {
    if (code === 'Escape') {
      instance.close();
    }
  });
}
