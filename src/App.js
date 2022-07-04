import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Navbar from './components/navbar';
import OrderSummary from './components/orderSummary';
import NoMatch from './components/noMatch';
import Products from './components/nasted/products';
import Feature from './components/nasted/feature';
import New from './components/nasted/new';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/order-summary' element={<OrderSummary />} ></Route>
        <Route path='/products' element={<Products />} >
          <Route path='featured' element={<Feature />} ></Route>
          <Route path='new' element={<New />} ></Route>
        </Route>
        <Route path='*' element={<NoMatch />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
