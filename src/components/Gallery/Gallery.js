import { h } from 'preact';
import './Gallery.scss';
import { useConfigContext } from "../../context/Config.context";

const Gallery = () => {
  const {config} = useConfigContext();
  console.log(config);


  return (
    <h1>CLD-GALLERYvvvv</h1>
  );
};

export default Gallery;
