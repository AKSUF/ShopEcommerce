import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import CategoryPage from './pages/CategoryPage';
import Login from './pages/Login';
import ProductPage from './pages/ProductPage';
import Register from './pages/Register';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path = '/Blog-App.github.io' element = { <Home/> } /> 
    <Route path = '/' element = { <Home/> } /> 
    <Route path = 'cart' element = { <Cart/> } /> 
    <Route path = '/categoryPage' element = { <CategoryPage/> } /> 
    <Route path = '/login' element = { <Login/> } /> 
    <Route path = '/productPage' element = { <ProductPage/> } /> 
    <Route path = '/register' element = { <Register/> } /> 

    </Routes>
    
    </BrowserRouter>

  
  );
}

export default App;
