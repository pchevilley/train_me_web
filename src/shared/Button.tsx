import './Button.css';

type ButtonStyle = 'primary';
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