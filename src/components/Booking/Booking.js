import { Link } from '@material-ui/core';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import place from '../../FakeData/FakeData';
import Header from '../Header/Header';
import './Booking.css';



const Booking = () => {
  const history = useHistory()
  const handleBooking = () => {
    history.push('/SearchPage');
  }
  const {Id} = useParams();
    const booking = place.find(booking => booking.id === Id); 
    const {name , details,origin} = booking;
  return (
    <div className="homeArea bg">
      <div className="header">
        <Header></Header>
      </div>
      <div className="travelMenu">
        <div className='container'>
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <div className='placeDetail'>
                <h1>{name}</h1>
                <p>{details}</p>
              </div>
            </div>

            <div className="col-md-5 d-flex  offset-1 ">
              <div className='bookingForm'>
                <Form.Group>
                  <label>Origin</label>
                  <Form.Control className='originAndDestination' type="text" placeholder={origin} disabled />
                  <label>Destination</label>
                  <Form.Control className='originAndDestination' type="text" placeholder={name} disabled />
                  <div className='d-flex justify-content-between'>
                    <label htmlFor="">Form</label>
                    <label htmlFor="">To</label>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <input className='dateAndYear' type="date" />
                    <input className='dateAndYear' type="date" />
                  </div>
                  <button
                  onClick={handleBooking}
                  className='bookingBtn1'
                  >Start Booking</button>
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