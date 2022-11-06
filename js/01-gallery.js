import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems.map(el => `
<div class="gallery__item">
    <a class="gallery__link" href="${el.original}">
        <img
        class="gallery__image"
        src="${el.preview}" 
        data-source="${el.original}" 
        // data-preview="${el.preview}" 
        alt="${el.description}"/>
    </a>
</div>
`)


galleryEl.innerHTML = markup.join('');

// on click model box 
function createLightBox(img_link) {
    const instance = basicLightbox.create(`
    <img class="gallery__image" src="${img_link}">
    `)
    instance.show();

  }


function handleImg(event) {
    event.preventDefault()
    if (event.target.nodeName === 'IMG') {
        createLightBox(event.target.dataset.source)
        document.addEventListener('keydown', onEscapeClose)
    }
    
}

function onEscapeClose(event) {    
    if (event.code === 'Escape') {
        console.log('В этом месте могло бы сработать instance.close()');
        alert('В этом месте могло бы сработать instance.close()');
        document.removeEventListener('keydown', onEscapeClose)
        alert('EventListener has been removed!');

}
    
}
galleryEl.addEventListener('click', handleImg);



