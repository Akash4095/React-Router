import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Navbar from './components/navbar';
import OrderSummary from './components/orderSummary';
import NoMatch from './components/noMatch';

function App() {
  return (
    <div>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/order-summary' element={<OrderSummary/>} ></Route>
        <Route path='*' element={<NoMatch/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
