import { h } from 'preact';
import './Image.styles.scss';

const Image = ({ asset }) => {
  return (
    <div className="image">
      <img src={asset.source}/>
    </div>
  );
};

export default Image;


