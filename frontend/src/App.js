
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import { useState } from 'react';
function App() {
  return (
      const [cartItems,setCartItems]=useState([]);
      <Router>
        <div>
          <Header cartItems={cartItems}/>
          
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/search" element={<Home />}/>
            <Route path="/product/:id" element={<ProductDetail />}/>
          </Routes>
        </div>
        <Footer/>
      </Router>
      
  );
}

export default App;

