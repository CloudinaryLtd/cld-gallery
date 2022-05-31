import { h } from 'preact';

export const Image = ({ asset }) =>{
  return <video
    src={asset.url}
  />
}
