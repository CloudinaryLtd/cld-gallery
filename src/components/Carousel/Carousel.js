import { h } from 'preact';
import { useConfigContext } from '../../context/Config.context';
import { Asset } from '../Asset/Asset';

export const Carousel = () => {
  const { config } = useConfigContext();

  const onAssetClick = (asset) => {
    console.log(asset);
  };

  return (
    <div>
      {
        config.mediaAssets.map((asset) => {
          return <Asset asset={asset} onClick={()=> onAssetClick(asset)}/>
        })
      }
    </div>
  );
};
