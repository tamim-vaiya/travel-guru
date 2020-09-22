import { Link } from '@material-ui/core';
import React from 'react';
import { Form } from 'react-bootstrap';
import Header from '../Header/Header';
import './Booking.css';

const Booking = () => {
  return (
    <div className="homeArea">
      <div className="header">
        <Header></Header>
      </div>
      <div className="travelMenu">
        <div className='container'>
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <div className='placeDetail'>
                <h1>Cox's bazar</h1>
                <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
              </div>
            </div>

            <div className="col-md-5 d-flex  offset-1 ">
              <div className='bookingForm'>
                <Form.Group>
                  <label>Origin</label>
                  <Form.Control className='originAndDestination' type="text" placeholder='{origin}' disabled />
                  <label>Destination</label>
                  <Form.Control className='originAndDestination' type="text" placeholder='{name}' disabled />
                  <div className='d-flex justify-content-between'>
                    <label htmlFor="">Form</label>
                    <label htmlFor="">To</label>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <input className='dateAndYear' type="date" />
                    <input className='dateAndYear' type="date" />
                  </div>
                  <Link to='/destination'><button className='btn bookingBtn1'>Start Booking</button></Link>
                </Form.Group>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Booking;