import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import './index.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/plates' element={<ShopCategory category="plate"/>}/>
        <Route path='/basins' element={<ShopCategory category="basin"/>}/>
       <Route path='/cups' element={<ShopCategory category="cup"/>}/>
       <Route path='/product' element={<Product/>}>
         <Route path=':productId' element={<Product/>}/>
       </Route>
       <Route path='/cart' element={<Cart/>}/>
       </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;