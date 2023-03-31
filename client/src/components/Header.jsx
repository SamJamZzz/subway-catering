import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <a href="/">
          <img src="https://wecatersubs.com/wp-content/uploads/2018/07/subway-we-cater-subs-logo-new.png"
               alt="WeCaterSubs.com"
          />
        </a>
        <div className='options'>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="https://order.subway.com/en-CA/restaurant/11425-0/menu">Our Menu</a></li>
            <li>Catering</li>
            <li><a href="https://www.subway.com/en-CA/MyWayRewards">Rewards & Deals</a></li>
            <li><a href="/contact-us-subway">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
};

export default Header;