import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import place from "../../FakeData/FakeData";
import Header from '../Header/Header';

const Home = () => {
  return (
    <div className="homeArea">
      <div className="header">
        <Header></Header>
      </div>
      <div className="travelMenu">
        <div className='container'>
          <div className="row d-flex align-items-center">
            <div className="col-md-4">
              <div className='placeDetail'>
                <h1>Cox's bazar</h1>
                <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                <button className='btn bookingBtn'>Booking </button>
              </div>
            </div>

            <div className="col-md-8 d-flex ">
              {
                place.map(place =>
                  <div >
                    <div className='placeImg'>
                      <Link to={`/booking/${place.id}`}><img src={place.img} alt="" /></Link>
                      <div className='placeName'>
                        <h2>{place.name}</h2>
                      </div>
                    </div>
                  </div>)
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;