import './App.css'
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {

  return (
    <>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          {/* подстановочный путь */}
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  )
}

export default App
