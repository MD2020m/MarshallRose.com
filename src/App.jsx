import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css'

function App() {

  return (
    <div className='app'>
      <Header storeName='Marshall Rose' 
        headerMessage='A new indie fashion house with something for everyone
        Find and customize high quality garments guaranteed to stand out!'
      ></Header>

      <Footer storeName='Marshall Rose'
        info='A new indie fashion house'
        content='Thank you for shopping with us'
      ></Footer>
    </div>
  )
}

export default App
