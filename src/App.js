import './App.css';
import Home from './Pages/Home';
import { AnimateSharedLayout } from "framer-motion/dist/es/index.js"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Navbar from './components/Navbar/Navbar';
import Cart from './Pages/Cart';
import ProductScreen from './Pages/ProductScreen';
import Footer from './components/Footer/Footer';
import ProductDetail from './Pages/ProductDetail';
import Shipping from './Pages/Shipping';
import Payment from './Pages/Payment';
import PlaceOrder from './Pages/PlaceOrder';
import OrderScreen from './Pages/OrderScreen';


function App() {
  
  return (
    <>
    <Router>

      <Navbar/>
      <Switch>
        <AnimateSharedLayout>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/product" component={ProductScreen} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/cart/:id?" component={Cart} />
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/placeorder" component={PlaceOrder} />
        <Route exact path="/shipping" component={Shipping} />
        <Route exact path="/order/:id" component={OrderScreen} />
        </AnimateSharedLayout>
      </Switch>
      <Footer/>
    
    </Router>
    </>
  );
}

export default App;
