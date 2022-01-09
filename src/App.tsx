import './App.css';

import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom';
import { UserSpace } from './user_space/UserSpace';
import { PublicPage } from './public_pages/PublicPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user_space"><UserSpace /></Route>
        <Route path="/"><PublicPage /></Route>
      </Switch>
    </Router>
  );
}

export default App;
