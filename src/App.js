import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Booking from './components/Booking';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/booking" element={<Booking />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
