import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Home} from './pages/home';
import { RegisterAbout, RegisterAge, RegisterPhotos, RegisterUbication, RegisterUser } from './pages/register';


function App() {
  return (
    <div className="App">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register/" element={<RegisterUser />} />
            <Route path="/register/age" element={<RegisterAge/>} />
            <Route path="/register/ubication" element={<RegisterUbication />} />
            <Route path="/register/about" element={<RegisterAbout />} />
            <Route path="/register/photos" element={<RegisterPhotos />} />
            </Routes>   
    </div>
  );
}

export default App;
