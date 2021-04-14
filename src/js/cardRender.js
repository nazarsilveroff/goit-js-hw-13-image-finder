import PixabayService from './pixabayService.js'
import imageCardTmpl from '../templates/imageCard.hbs'
import debounce from 'lodash/debounce.js'
import { onGalleryElClick} from './modal'
const ref = {
        input: document.querySelector('.search-form'),
  ul: document.querySelector('.gallery'),
        button:document.querySelector('.more')
}

const pixabayService = new PixabayService()




function findPicture(e) {
    pixabayService.query = e.target.value
    
  //   if (pixabayService.query === '') {
  //   return alert('Enter the word');
  // }
    // pixabayService.firstPage();
  clearePictures();
  pixabayService.fetchHits()
     .then(hits => {
       renderPictures(hits)
       
     });
  ref.button.classList.remove('is-hiden')
}

function clearePictures() {
  ref.ul.innerHTML=''
}
function renderPictures(data) {
  ref.ul.insertAdjacentHTML('beforeend', imageCardTmpl(data))
}


function onMore() {
  pixabayService.incrementPage()
    pixabayService.fetchHits()
     .then(hits => {
       renderPictures(hits)
       scrollPage()
     });
}

function scrollPage() {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior:'smooth',
    })
}
ref.ul.addEventListener('click', onGalleryElClick)
ref.button.addEventListener('click',onMore)
ref.input.addEventListener('input', debounce(findPicture, 1000))
