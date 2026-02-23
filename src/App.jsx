import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import './App.css'

function App() {

  return (
    <Router>
      <div className='app'>
        <Header storeName='Marshall Rose' 
          headerMessage='A new indie fashion house with something for everyone
          Find and customize high quality garments guaranteed to stand out!'
        />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer storeName='Marshall Rose'
          info='A new indie fashion house'
          content='Thank you for shopping with us'
        />
      </div>
    </Router>
  )
}

export default App
