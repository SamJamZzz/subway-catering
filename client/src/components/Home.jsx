import React from 'react';

const Home = () => {
  return (
    <>
      <section>
        <div>
          <h3>DELICIOUS AND DELIVERED</h3>
          <h2>Get all that good SUBWAY&#174; taste without going anywhere</h2>
          <a href="https://order.subway.com/en-CA/restaurant/11425/menu">ORDER ONLINE</a>
        </div>
        <img src="https://wecatersubs.com/wp-content/uploads/2020/05/subway-6-inch-sub.png" alt="6-inch sub" />
      </section>
      <section>
        <p>6626B East Hastings Street, Unit B Kensington Square Plaza, Burnaby V5B 1S2</p>
      </section>
      <section>
        <p>Ordering for one or your whole family? We got you. Check out our partners below.</p>
        <div>
          <div>
            <a href="https://www.doordash.com/business/subway-3720">
              <img src="https://wecatersubs.com/wp-content/uploads/2020/06/doordash-Logo.png" alt="DoorDash" />
            </a>
            <p>Get all that good Subway&#174; taste without going anywhere with DoorDash! Luckily, DoorDash is available in most major cities in Canada.</p>
          </div>
          <div>
            <a href="https://www.ubereats.com/ca">
              <img src="https://wecatersubs.com/wp-content/uploads/2020/06/uber-eats-logo-e1620501988311.png" alt="UberEats" />
            </a>
            <p>Get great food from Subway&#174; restaurants fast with Uber Eats! The best part is you can track your sub to your door.</p>
          </div>
          <div>
            <a href="https://www.skipthedishes.com">
              <img src="https://wecatersubs.com/wp-content/uploads/2020/06/skip-the-dishes-logo-1024x308.png" alt="DoorDash" />
            </a>
            <p>Ordering Subway&#174; delivery with SkipTheDishes is even easier than eating it! Wherever you are, all you gotta do is order and answer the door.</p>
          </div>
        </div>
      </section>
    </>
  )
};

export default Home;