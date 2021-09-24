import './PublicPage.css';

import { Navbar } from './Navbar';
import { Landing } from './Landing';
import { AboutPage } from './AboutPage';

import {
    BrowserRouter as Router, 
    Switch,
    Route
  } from 'react-router-dom';

export function PublicPage() {
    return (    
        <div className="public-page">
            <Navbar />            
            <Switch>
                <Route path="/about"><AboutPage /></Route>
                <Route path="/"><Landing /></Route>
            </Switch>
        </div>
    );
}