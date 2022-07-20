import './Button.scss';
import { Icon } from './Icon';

type ButtonStyle = 'primary'|'icon'|'link';
type ButtonProps = {
    className?: string
    style?: ButtonStyle
    label?: string
    icon?: string
    type?: 'submit'|'button'
    onClick?: () => void
};

export function Button(props: ButtonProps) {
    return (
        <button 
            onClick={props.onClick}
            type={props.type || 'button'}
            className={`btn ${_getStyleClass(props.style)} ${props.className || ''}`}>
                {props.label}
                {props.icon && <Icon name={props.icon} />}
        </button>
    );
};

function _getStyleClass(style?: ButtonStyle): string {
    if (style) {
        return 'btn--' + style;
    } else {
        return '';
    }
}