import { h } from 'preact';
import Gallery from './Gallery';
import { render } from 'preact';
import { getElement } from '../../utils/dom';


function GalleryWidget(options) {

  const element = getElement(options.container);

  function renderApp(){
    render(<Gallery />, element);
  }

  return {
    render: renderApp
  }
}

(win => {
  const cloudinary = {
    ...(window.cloudinary || {}),
    galleryWidget: (options) => GalleryWidget(options),
  };
  win.cloudinary = cloudinary;
})(self);
