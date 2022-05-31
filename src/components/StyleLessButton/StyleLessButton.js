import { h } from 'preact';
import './StyleLessButton.styles.scss';

export const StyleLessButton = ({children, className, ...rest}) => <button  {...rest} className={`styleLessButton ${className}`}>{children}</button>
