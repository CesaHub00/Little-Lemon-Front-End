import Time from './Time';
import Date from './Date';
import Guests from './Guests';
import Submit from './Submit';
import Occasion from './Occasion';
import { Form } from 'react-router-dom';
import React, { useState } from "react";

function BookingForm() {
    const [occasion, setOccasion] = useState('')
    const [time, setTime] = useState('')
    const [guests, setGuests] = useState('1')
    const [date, setDate] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Submission Done!')
    }

    return (
      <>
        <Form onSubmit={handleSubmit}>

            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                required={true}
                onChange={e => setDate(e.target.value)}
                value={date}
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                name='time'
                onChange={e => setTime(e.target.value)}
                value={time}
                required={true}
            >
                <option value='17:00'>17:00</option>
                <option value='18:00'>18:00</option>
                <option value='19:00'>19:00</option>
                <option value='20:00'>20:00</option>
                <option value='21:00'>21:00</option>
                <option value='22:00'>22:00</option>
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1" max="10"
                id="guests"
                required={true}
                value={guests}
                onChange={e => setGuests(e.target.value)}
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                name='occasion'
                onChange={e => setOccasion(e.target.value)}
                value={occasion}
            >
                <option value='birthday'>Birthday</option>
                <option value='anniversary'>Anniversary</option>
            </select>

            <input type="submit"/>
        </Form>


        {/*<form style="display: grid; max-width: 200px; gap: 20px">
        <label for="res-date">Choose date</label>
        <input type="date" id="res-date">
        </select>
        <label for="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests">
        <input type="submit" value="Make Your reservation">
        </form>*/}
      </>
    );
  }
  
  export default BookingForm;