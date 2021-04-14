  
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function onGalleryElClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const img = `<img src=${e.target.dataset.source} alt="picture" />`;
  const createdImg = basicLightbox.create(img);

  createdImg.show();
}
export { onGalleryElClick };
