import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route index element={<Main />}></Route>
          {/*<Route path="booking" element={<Booking />}></Route>*/}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
