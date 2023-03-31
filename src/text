import Navbar from './components/navigation/Narbar'
//import NavbarFront from './components/navigation/NavbarFront'
import Footer from './components/Footer/Footer';
import ProductDetail from './components/Product/ProductDetail';
import Products from './pages/Products';
import NewArrivals from './pages/NewArrivals';
import Cart from './pages/Cart';
// import Home from './pages/Home';
import Logout from './components/auth/Logout';
import Wishlist from './pages/Wishlist';
import {Switch, Route} from "react-router-dom"
import './style.css'
//import Auth from './pages/Auth';

//import Auth from './pages/Auth';

function App() {
  return (
    <div>
        {/* <Auth/> */}

        <Navbar />
        
        <Switch>
  
          <Route exact path="/">
            <Products />
          </Route>
          
          <Route path="/new-arrivals">
            <NewArrivals />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/wishlist">
            <Wishlist />
          </Route>

          <Route path="/product/:productId">
            <ProductDetail />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>
        
        <Footer />
    </div>
  );
}

export default App;
