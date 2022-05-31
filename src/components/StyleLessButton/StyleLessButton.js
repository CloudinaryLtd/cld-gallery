import { h } from 'preact';
import './StyleLessButton.styles.scss';

export const StyleLessButton = ({children, ...rest}) => <button  {...rest} className="styleLessButton">{children}</button>
