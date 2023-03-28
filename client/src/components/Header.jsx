import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <div className='logo'>
          <a href="https://wecatersubs.com">
            <img src="https://wecatersubs.com/wp-content/uploads/2018/07/subway-we-cater-subs-logo-new.png"
                 alt="WeCaterSubs.com"
            />
          </a>
        </div>
        <div className='options'>
          <ul>
            <li>Home</li>
            <li>Our Menu</li>
            <li>Catering</li>
            <li>Rewards & Deals</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </nav>
    </header>
  )
};

export default Header;