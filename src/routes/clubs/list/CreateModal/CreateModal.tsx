import { Button } from '../../../../shared/Button';
import { Icon } from '../../../../shared/Icon';
import { CreateClubForm } from './CreateClubForm';
import './CreateModal.scss';


const pills = [
    {
        icon: "address-card",
        color: "#E7556B",
        title: "Manage your members",
        description: "Store their contact infos, assign them training plans, track their performances, follow up with paiments..."
    },
    {
        icon: "calendar-alt",
        color: "#F5BB4C",
        title: "Schedule training sessions",
        description: "Create training plans and share them with your members."
    },
    {
        icon: "users",
        color: "#00F5F9",
        title: "Recruit new members",
        description: "Publish your own website and attract new members."
    }
];


export function CreateModal() {
    return <div className="create-club-modal">
        <div className="create-club-modal__presentation">
            {
                pills.map(p => <CreateClubPresentationPill {...p}/>)
            }
            
        </div>
        <div className="create-club-modal__form">
            <CreateClubForm />
        </div>
    </div>
}

function CreateClubPresentationPill(props: {icon: string, title: string, description: string, color: string}) {
    const { icon, title, description, color } = props;
    
    return <div className="create-club-pill">
        <div className="create-club-pill__circle" style={{backgroundColor : color}}>
            <Icon name={icon} />
        </div>
        <div className="create-club-pill__description">
            <h3 className='create-club-pill__description__title'>{title}</h3>
            <p className='create-club-pill__description__description'>{description}</p>
        </div>
    </div>
}