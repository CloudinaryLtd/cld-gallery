import { h } from 'preact';

export const Image = ({ asset }) =>{
  return <img
    src={asset.url}
  />
}
