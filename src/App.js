import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { RegisterAbout, RegisterAge, RegisterPhotos, RegisterUbication, RegisterUser, Registro } from './pages/register';
import { Login } from './pages/login';
import { Profile } from './pages/profile';
import { User } from './pages/user';
import { Match } from './pages/match'; 





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
       < Route path="/profile" element={<Profile />} />
       < Route path="/user" element={<User />} />
       < Route path="/match" element={<Match />} />
       < Route path="/registro" element={<Registro />} />
      </Routes>
    </div>
  );
}

export default App;


//pendiente hacer un sing up function y un logo function que se coloca en todas las paginas.
