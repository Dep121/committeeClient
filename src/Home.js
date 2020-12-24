import React from 'react';
import './Home.css';
import profilePic from './assets/image_holder.jpg';

function Home() {
  return (
    <div className="home">

      <div className={'contact'}>
        {
          [...new Array(10)].map((_, i)=>(
            <div key={i} className={'listItem'}>
              <div className={'image'}>
                <img src={profilePic} alt={'profile'} />
              </div>
              <div className={'mid'}>
                <h4>Deepak</h4>
                <span>online</span>
              </div>
              <span className={'time'}>time</span>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Home;
