import './App.css'
import About from './components/About/About.tsx';
import Basket from './components/Basket/Basket.tsx';
import Counter from './components/Counter/Counter.tsx';
import Header from './components/Header/Header.tsx';
import Main from './components/Main.tsx';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductsPage from './components/Products/Products.tsx';
import Home from './components/Home/Home.tsx';


function App() {

  return (
    <>
      <Header></Header>
      <Counter></Counter>
      <BrowserRouter>
        <Routes>
          {/* подстановочный путь */}
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
