import React, { useEffect, useState } from 'react'
import Header from './Components/Headers';
import Footer from './Components/Footer';
import Product from './Components/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Contact from './Components/Contact';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product products={products} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App