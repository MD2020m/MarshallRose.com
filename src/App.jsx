import {BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchProducts, fetchReviews, fetchUsers } from '../api-service';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Products from './Pages/Products';
import About from './Pages/About';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import Login from './Pages/Login';
import AdminPage from './Pages/AdminPage';
import Wishlist from './Pages/Wishlist';
import ProtectedRoute from './Components/ProtectedRoute';
import { WishlistProvider } from './Contexts/WishlistContext';
import { AuthProvider } from './Contexts/AuthContext';
import './App.css'

/*const sampleProducts = [
  {
    id: 0,
    name: `Farmer's Jacket`,
    description: `A rugged jacket made to last. Perfect for hard work or a casual night out`,
    category: 'jackets',
    price: 95.00,
    availableFabrics: {fabrics: ['denim','corduroy','canvas']},
    availableDetails: {details: ['embroidery', 'patterned fabric', 'inner lining', 'lined pockets']}
  },
  {
    id: 1,
    name: 'Summer Dress',
    description: 'A light dress perfect for a picnic on a sunny day or a walk along the beach',
    category: 'dresses',
    price: 70.00,
    availableFabrics: {fabrics: ['muslin','silk','cotton']},
    availableDetails: {details: ['embroidery', 'patterned fabric']}
  },
  {
    id: 2,
    name: 'Sample Pants',
    description: 'The perfect pair of pants for my sample data',
    category: 'pants',
    price: 0.00,
    availableFabrics: {fabrics: ['denim','cotton']},
    availableDetails: {details: ['embroidery']}
  },
  {
    id: 3,
    name: 'Jeans',
    description: 'just jeans',
    category: 'pants',
    price: 40.00,
    availableFabrics: {fabrics: ['denim']},
    availableDetails: {details: ['embroidery']}
  }
];*/

const sampleProducts = await fetchProducts();

//TODO: replace sample reviews array with API request to fetch reviews
// Re-implement reviews functionality for future version of application
/*const sampleReviews = [
  {
    id: 1, 
    productId: 0,
    roses: 5
  },
  {
    id: 2,
    productId: 1,
    roses: 2
  }
]*/

const sampleReviews = await fetchReviews();

const sampleUsers = await fetchUsers();
console.log(sampleUsers);

const categories = [...new Set(sampleProducts.map(product => (product.category)))];

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
    setCart(cart.filter(cartItem => cartItem.product.id !== productId));
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
    <AuthProvider>
      <WishlistProvider>
        <Router>
          <div className='app'>
            <Header storeName='Marshall Rose' 
              headerMessage='A new indie fashion house with something for everyone
              Find and customize high quality garments guaranteed to stand out!'
              cartCount={cartCount}
            />
              <Routes>
                <Route path="/" element={<Home products={sampleProducts}/>} />
                <Route path="/products" element={<Products products={sampleProducts} categories={categories}/>} />
                <Route path="/about" element={<About />} />
                <Route path="/products/:product_id" element={<ProductPage products={sampleProducts} 
                  cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} reviews={sampleReviews}/>} />
                <Route path="/cart" element={<CartPage cart={cart} cartCount={cartCount}/>} />
                <Route path='/wishlist' element={<Wishlist />} />
                <Route path='/login' element={<Login />} />
                <Route path='/admin' element={
                  <ProtectedRoute>
                    <AdminPage products={sampleProducts} />
                  </ProtectedRoute>
                } />
              </Routes>
            <Footer storeName='Marshall Rose'
              info='A new indie fashion house'
              content='Thank you for shopping with us'
            />
          </div>
        </Router>
      </WishlistProvider>
    </AuthProvider>
  )
}

export default App
