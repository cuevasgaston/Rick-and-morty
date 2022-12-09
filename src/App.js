import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
import About from './components/About'
import Detail from './components/Detail'
import Form from './components/Form'
import Favorites from './components/Favorites'

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username= 'gaston322@hotmail.com'
  const password= 'gaston1'

  const Location = useLocation();
  const Navigate = useNavigate();

  function login(userData) {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       Navigate('/home');
    }
    else{ 
      alert('usuario o contraseña incorrecto')
    }
 }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  function onClose(id) {
    setCharacters(oldChar => oldChar.filter(character => character.id !== id))
  }

  useEffect(() => {
    !access && Navigate('/');
  }, [access]);

  return (
    <div className='App' style={{ padding: '25px' }}>
      {Location.pathname === '/' ? null : <Nav onSearch={onSearch} />}
      <Routes>
        <Route path='/' element={<Form login={login}/>} />
        <Route
          path='/home'
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path='/favorites' element={<Favorites />}/>
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
