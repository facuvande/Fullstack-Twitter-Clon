import { Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './Components/HomePage/HomePage.jsx';
import { Auth } from './Components/Auth/Auth.jsx';

function App() {
  return (
    <div className=''>

      <Routes>
        <Route path='/' element={true ? <HomePage/> : <Auth/>}/>
      </Routes>

    </div>
  )
}

export default App
