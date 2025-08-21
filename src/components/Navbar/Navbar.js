import React, { useState } from 'react'; 
import './Navbar.css';
import logo from '../Assets/logo/logo.png';
import cart_icon from '../Assets/logo/cart.jpg';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        {logo && <img src={logo} alt="logo" />}
        <p>SHOPPER</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to='/'>Shop</Link>{menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("plates")}>
          <Link to='/plates'>Plates</Link>{menu === "plates" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("basins")}>
          <Link to='/basins'>Basins</Link>{menu === "basins" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("cups")}>
          <Link to='/cups'>Cups</Link>{menu === "cups" ? <hr /> : null}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'>
          <img src={cart_icon} alt="cart" />
          <div className="nav-cart-count">{cartCount}</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
