import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Booking from './components/Booking';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Main />}>
        <Route path="/booking" element={<Booking />}/>
    </Route>
  ));

  return (
    <>
      {/*<BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/booking" element={<Booking />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>*/}
      <Nav/>
      <RouterProvider router={router}/>
      <Footer/>
    </>
  );
}

export default App;
