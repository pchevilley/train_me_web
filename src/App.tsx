import './App.css';

import {
  BrowserRouter, 
  Routes,
  Route
} from 'react-router-dom';
import { UserSpace } from './routes/user_space/UserSpace';
import { PublicPage } from './routes/public_pages/PublicPage';
import { ClubList } from './routes/clubs/list/ClubList';
import { LoginPage } from './routes/public_pages/LoginPage';
import { RegisterPage } from './routes/public_pages/RegisterPage';
import { Landing } from './routes/public_pages/Landing';
import { AboutPage } from './routes/public_pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicPage />} >
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="/u" element={<UserSpace />}>
          <Route path="clubs" element={<ClubList />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;