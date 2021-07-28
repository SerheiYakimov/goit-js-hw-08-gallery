const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const refs = {
  gallery: document.querySelector('.js-gallery'),
  galleryImage: document.querySelector('.gallery__image'),
  lightbox: document.querySelector('.lightbox'),
  lightboxImage: document.querySelector('.lightbox__image'),
  buttonClose: document.querySelector('button[data-action="close-lightbox"]'),
  lightboxOverlay: document.querySelector('.lightbox__overlay'),
  

}

const galleryEl = galleryItems.map(element => {
  const galleryItemsEl = `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${element.original}"
  >
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
  </li>`
  return galleryItemsEl;
});

refs.gallery.insertAdjacentHTML('afterbegin', galleryEl.join(''));

refs.gallery.addEventListener('click', onOpenModal);
refs.buttonClose.addEventListener('click', onCloseModal);
refs.lightboxOverlay.addEventListener('click', onOverlayCloseModal);
// refs.gallery.addEventListener('click', onFindIndex);



// function onFindIndex(e) {

// const index = galleryEl.findIndex(el => el.name === );
// console.log(index);

//   galleryEl.forEach(e.target => {
//     e.target);
    
// };

  
  //
  // console.log(e.target.src);
  // const index = galleryItems.forEach(el => console.log( galleryItems.indexOf(el)));
//   galleryEl.forEach(el => {
//     const index = galleryEl.indexOf(el);
//     return index;
  
//   });

//  };



function onOpenModal(e) {
  
  window.addEventListener('keydown', onEscCloseModal);
  // window.addEventListener('keydown', onArrowRight);
  // window.addEventListener('keydown', onArrowLeft);
  
  e.preventDefault();
 
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  
  refs.lightbox.classList.add('is-open');
  refs.lightboxImage.setAttribute('src', e.target.dataset.source);
  refs.lightboxImage.setAttribute('alt', e.target.alt);    
};

function onCloseModal(e) {
    if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  refs.lightbox.classList.remove('is-open');
  refs.lightboxImage.setAttribute('src', '');
  refs.lightboxImage.setAttribute('alt', '');
  
};

function onOverlayCloseModal(e) {
  if (!e.target.classList.contains('lightbox__overlay')) {
    return;
  }

  refs.lightbox.classList.remove('is-open');
  refs.lightboxImage.setAttribute('src', '');
  refs.lightboxImage.setAttribute('alt', '');
};

function onEscCloseModal(e) {
  console.log(e.code);
  if (e.code !== 'Escape') {
    return;
  }

  window.removeEventListener('keydown', onEscCloseModal);

  refs.lightbox.classList.remove('is-open');
  refs.lightboxImage.setAttribute('src', '');
  refs.lightboxImage.setAttribute('alt', '');
};

// function onArrowLeft(e) {
//   if (e.code !== 'Arrowleft') {
//     return;
//   }
  

//   refs.lightboxImage.setAttribute('src', index++);
//   refs.lightboxImage.setAttribute('alt', index++); 

// };

// function onArrowRight(e) {
//   if (e.code !== 'Arrowleft') {
//     return;
//   }

//   refs.lightboxImage.setAttribute('src', e.target.dataset.source += 1);
//   refs.lightboxImage.setAttribute('alt', e.target.alt += 1); 

// };













