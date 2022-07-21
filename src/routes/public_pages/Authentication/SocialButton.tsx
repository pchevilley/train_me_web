import './SocialButton.css';
import { Icon } from '../../../shared/Icon';
import { SyntheticEvent } from 'react';

type SocialButtonProps = {
    icon: string,
    onClick: (e: SyntheticEvent) => void
};

export function SocialButton(props: SocialButtonProps) {
    return (
        <button className="social-button" onClick={props.onClick}>
            <Icon name={props.icon} faStyle="brands"></Icon>
        </button>
    );
};
