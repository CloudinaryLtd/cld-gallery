import { h } from 'preact';
import './Gallery.scss';
import { ConfigContextConnected } from '../../context/Config.context';

const Gallery = ({ config }) => {
  return (
    <ConfigContextConnected config={config}>
      <h1>CLD-GALLERYvvvv</h1>
    </ConfigContextConnected>
  );
};

export default Gallery;
