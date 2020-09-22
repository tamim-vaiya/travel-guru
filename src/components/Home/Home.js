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
                <h1>{place.name}</h1>
                <p>{place.details}</p>
                <Link to={`/booking/${place.id}`}><button className='btn bookingBtn'>Booking </button></Link>
              </div>
            </div>

            <div className="col-md-8 d-flex ">
              {
                place.map(place =>
                  <div >
                    <div className='placeImg'>
                      <img src={place.img} alt="" />
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