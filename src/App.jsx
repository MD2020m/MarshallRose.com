import {BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Products from './Pages/Products';
import About from './Pages/About';
import ProductPage from './Pages/ProductPage';
import './App.css'

const sampleProducts = [
  {
    id: 0,
    name: `Farmer's Jacket`,
    description: `A rugged jacket made to last. Perfect for hard work or a casual night out`,
    price: 95.00,
    availableFabrics: {fabrics: ['denim','corduroy','canvas']},
    availableDetails: {details: ['embroidery', 'patterned fabric', 'inner lining', 'lined pockets']}
  },
  {
    id: 1,
    name: 'Summer Dress',
    description: 'A light dress perfect for a picnic on a sunny day or a walk along the beach',
    price: 70.00,
    availableFabrics: {fabrics: ['muslin','silk','cotton']},
    availableDetails: {details: ['embroidery', 'patterned fabric']}
  },
  {
    id: 2,
    name: 'Sample Pants',
    description: 'The perfect pair of pants for my sample data',
    price: 0.00,
    availableFabrics: {fabrics: ['denim','cotton']},
    availableDetails: {details: ['embroidery']}
  }
];

function App() {

  const [cart, setCart] = useState(() => {
    const cartItems = localStorage.getItem('cartItems');

    if (cartItems) {
      return JSON.parse(cartItems);
    }
    
    return [];
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  };

  const cartCount = cart.reduce((total, product) => total + 1, 0);

  useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cart));
    } catch {
      console.warn('Could not save cart to localStorage: ', error);
    }
  }, [cart])

  return (
    <Router>
      <div className='app'>
        <Header storeName='Marshall Rose' 
          headerMessage='A new indie fashion house with something for everyone
          Find and customize high quality garments guaranteed to stand out!'
          cartCount={cartCount}
        />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products products={sampleProducts}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:product_id" element={<ProductPage products={sampleProducts} 
              cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>} />
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
