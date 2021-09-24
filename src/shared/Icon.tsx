type FAStyle = 'duotone'|'light'|'solid';
type IconProps = {
    name: string
    style?: FAStyle
};

export function Icon(props: IconProps) {
    return <span className={`fa-${props.name} ${_getStyle(props.style)}`}></span>;
}

function _getStyle(style?: FAStyle): string{
    switch(style) {
        case 'solid':
            return 'fas';
        case 'duotone':
            return 'fad';
        default:
            return 'fal';        
    }
}