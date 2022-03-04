import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { RegisterAbout, RegisterAge, RegisterPhotos, RegisterUbication, RegisterUser } from './pages/register';
import { Login } from './pages/login';
import { UserProfile } from './pages/userProfile';
import { EditProfile } from './pages/editProfile';
import { Settings } from './pages/settings';



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register/" element={<RegisterUser />} />
        <Route path="/register/age" element={<RegisterAge />} />
        <Route path="/register/ubication" element={<RegisterUbication />} />
        <Route path="/register/about" element={<RegisterAbout />} />
        <Route path="/register/photos" element={<RegisterPhotos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/profile" element={<EditProfile />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>
    </div>
  );
}

export default App;


//pendiente hacer un sing up function y un logo function que se coloca en todas las paginas.
