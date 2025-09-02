import Navbar from './components/Navbar/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import { CartProvider } from './Context/CartContext';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import './index.css';
import Footer from './components/Footer/Footer';
import Plates from './Pages/Plates';
import Basins from './Pages/Basins';
import Cups from './Pages/Cups';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/plates" element={<Plates />} />
          <Route path="/basins" element={<Basins />} />
          <Route path="/cups" element={<Cups />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;