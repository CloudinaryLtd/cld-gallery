import { h } from 'preact';
import Gallery from './components/Gallery';
import { render } from 'preact';
import { getElement } from './utils/dom';

function GalleryWidget(config) {

  const element = getElement(config.container);

  function renderApp(){
    render(<Gallery config={config}/>, element);
  }

  return {
    render: renderApp
  }
}

(win => {
  const cloudinary = {
    ...(window.cloudinary || {}),
    galleryWidget: (config) => GalleryWidget(config),
  };
  win.cloudinary = cloudinary;
})(self);
