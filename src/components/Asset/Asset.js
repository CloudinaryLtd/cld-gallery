import { h } from 'preact';
import { Image } from "./Image/Image";
import { StyleLessButton } from "../StyleLessButton/StyleLessButton";
import "./Asset.styles.scss";

export const Asset = ({ type,asset }) => {

  const getAssetByType = () => {
    switch (type) {
      case ASSET_TYPE.IMAGE:
        return <Image asset={asset} />
      case ASSET_TYPE.VIDEO:
        return <Video asset={asset} />
      // case ASSET_TYPE.TREE:
      //   return <Tree asset={asset} />
      // case ASSET_TYPE.SPIN:
      //   return <Spin asset={asset}/>
    }
  };

  return (
    <StyleLessButton className="asset">
      {getAssetByType()}
    </StyleLessButton>
  );
};




