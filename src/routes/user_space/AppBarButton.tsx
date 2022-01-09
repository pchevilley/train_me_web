import './AppBarButton.css';
import { Icon } from '../../shared/Icon';

type AppBarButtonProps = {
    icon: string
    label?: string
    onClick: () => void
};

export function AppBarButton(props: AppBarButtonProps) {
    return (
        <button className="app-bar-button" onClick={props.onClick}>
            <Icon name={props.icon} />
            <span>
                {props.label}
            </span>
        </button>
    );
}