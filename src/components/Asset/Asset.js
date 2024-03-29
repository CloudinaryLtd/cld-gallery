import { h } from 'preact';
import { StyleLessButton } from '../StyleLessButton/StyleLessButton';
import './Asset.styles.scss';
import Image from '../Image';
import Video from '../Video';
import { ASSET_TYPE } from '../../const';
import Three from '../Three';
import Spin from '../Spin';

export const Asset = ({ asset, onClick }) => {

  const getAssetByType = () => {
    switch (asset.mediaType) {
      case ASSET_TYPE.IMAGE:
        return <Image asset={asset} />
      case ASSET_TYPE.VIDEO:
        return <Video asset={asset} />
      case ASSET_TYPE.THREE:
        return <Three asset={asset} />
      case ASSET_TYPE.SPIN:
        return <Spin asset={asset}/>
    }
  };

  return (
    <StyleLessButton className="asset" onClick={onClick}>
      {getAssetByType()}
    </StyleLessButton>
  );
};




