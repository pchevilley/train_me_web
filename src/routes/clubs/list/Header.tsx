import {Button} from '../../../shared/Button';
import './Header.scss';

export function Header(props: {onCreateClub: () => void}) {
    return (
        <section className="club-list__header">
            <h1 className='club-list__header__title'>Join a club</h1>
            <Button onClick={() => props.onCreateClub()} label="Create a club" className='club-list__header__button'/>
        </section>
    ); 
}