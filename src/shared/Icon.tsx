type FAStyle = 'duotone'|'light'|'solid'|'brands';
type IconProps = {
    name: string
    faStyle?: FAStyle
    onClick?: () => void
    className?: string
};

export function Icon(props: IconProps) {
    return <span onClick={props.onClick} className={`fa-${props.name} ${_getStyle(props.faStyle)} ${props.className ?? "" }`}></span>;
}

function _getStyle(style?: FAStyle): string{
    switch(style) {
        case 'solid':
            return 'fas';
        case 'duotone':
            return 'fad';
        case 'brands':
            return 'fab';
        default:
            return 'fal';        
    }
}