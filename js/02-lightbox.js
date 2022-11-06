import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems.map(el => `
<div class="gallery">
    <a class="gallery__item" href="${el.original}">
    <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
    </a>
</div>
`)

galleryEl.innerHTML = markup.join('');

let gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
