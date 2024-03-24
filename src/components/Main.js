import Booking from './Booking';
import Home from './Home';
import ConfirmedBooking from './Confirmed_Booking';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useReducer } from 'react';

function Main() {
  const seededRandom = function(seed){
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function(date){
    let result = [];
    const random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      };
      if (random() < 0.5) {
        result.push(i + ":30");
      };
    };
    return result;
  };

  const submitAPI = function(formData){
    return true;
  }

  const initialState = {availableTimes: fetchAPI(new Date())}
  const [state, dispatch] = useReducer(updateTime, initialState);

  function updateTime(state, date){
    return {availableTimes: fetchAPI(new Date())}
  }

  const navigate = useNavigate();
  function submitForm(formData){
    if(submitAPI(formData)){
      navigate("/confimed");
    }
  }

  return (
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>}/>
          <Route path="/confimed" element={<ConfirmedBooking />}/>
        </Routes>
      </main>
  );
}
  export default Main;