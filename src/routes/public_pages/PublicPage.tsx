import './PublicPage.css';

import { Navbar } from './Navbar';

import {
    Outlet
} from 'react-router-dom';

export function PublicPage() {
    return (    
        <div className="public-page">
            <Navbar />  
            <Outlet />
        </div>
    );
}