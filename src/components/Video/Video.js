import { h } from 'preact';

import "./Video.styles.scss";

const Video = ({ asset }) => {
  return (
    <div className="video">
      <video src={asset.source} controls/>
    </div>
  );
};

export default Video;


