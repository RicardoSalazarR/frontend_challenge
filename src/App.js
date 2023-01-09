import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProtectedRoutes from './components/ProtectedRoutes';
import Body from './components/Body';
import CharacterCard from './components/CharacterCard'
import { HashRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/Home' element={<Body />} />

          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
