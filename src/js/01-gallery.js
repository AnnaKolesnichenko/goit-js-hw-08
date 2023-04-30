import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const cardsGallery = document.querySelector('.gallery');

//creating gallery of items on page
function onCardsGalleryCreate(items) {    
    return items.map((item) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img class="gallery__image" 
                    src="${item.preview}" 
                    alt="${item.description}" />
            </a>
        </li>          
        `;
    }).join('');        
}
const cardsOfGallery = onCardsGalleryCreate(galleryItems);
cardsGallery.insertAdjacentHTML('beforeend', cardsOfGallery);

/*function onGalleryShow(e) {
    //e.preventDefault();
    const lightbox = new SimpleLightbox('.gallery__item a', 
     {captionDelay: 250, enableKeyboard: true, captionData: 'alt', captions: true});
     lightbox.open();
}*/


cardsGallery.addEventListener('click', 
    //preventLoad(e);
    new SimpleLightbox('.gallery__item a', 
     {captionDelay: 250, enableKeyboard: true, captionsData: 'alt', captions: true})
     
);


