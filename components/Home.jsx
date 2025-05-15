import React from 'react'
import '../css/home.css';
export default function Home() {
  return (
    <>
     <div className="section1">
        <div className="left-sec">
            <h2>Travel: A Necessity for the Soul</h2>
            <p>In a world filled with constant demands and distractions, travel offers a much-needed escape for the mind and spirit. It provides the space to recharge, reflect, and gain new perspectives that enrich our lives. Whether exploring new cultures or reconnecting with nature, travel nourishes the soul, fostering personal growth and inner peace.
            </p>
        </div>
        <div className="right-sec">
            <img src="images/home1.jpg" alt=""/>
        </div>
         </div>
     <div className="section2">
        <h2>Plan your Vacation with us</h2>
        <div className="vac-img">
            <img src="images/home2.jpg" alt=""/>
        </div>
        <div className="sect2-content">
            <p>Let us help you design the perfect getaway tailored to your dreams and desires. From seamless bookings to curated itineraries, we take care of every detail so you can focus on what truly matters—creating unforgettable memories. Your ideal vacation is just a click away!</p>
        </div>
        </div>
        <div className="section3">
        <h2>Customer Reviews</h2>
        <div className="box">
            <h3>Seamless Experience!</h3>
            <h4>⭐⭐⭐⭐⭐</h4>
            <p>"I can't say enough about how easy and enjoyable it was to book my vacation through this website. From browsing destinations to booking flights and accommodations, everything was clear and well-organized. The recommendations for activities were spot-on, and I ended up having the best vacation of my life. Highly recommend to anyone looking for a stress-free travel experience!"</p>
            <h4>- Rajesh</h4>
        </div>
        <div className="box">
            <h3>Great Customer Service</h3>
            <h4>⭐⭐⭐⭐⭐</h4>
            <p>"I had a small issue with my booking, but their customer service team was quick to respond and resolved everything within hours. It’s so reassuring to know that I can trust this company to handle things professionally, no matter what. Will definitely use them again for my next trip!"</p>
            <h4>- Suresh</h4>
        </div>
        <div className="box">
            <h3>Fantastic Destinations and Deals</h3>
            <h4>⭐⭐⭐⭐⭐</h4>
            <p>"This site has been my go-to for all my trips over the past year. The range of destinations is fantastic, and I’ve discovered several places I’d never even considered before. They also have amazing deals and discounts that make traveling more affordable. Highly recommend it to anyone looking for a great deal and an unforgettable trip!"</p>
            <h4>- Aman Sharma</h4>
        </div>
        <div className="box">
            <h3>A Dream Vacation Made Easy</h3>
            <h4>⭐⭐⭐⭐⭐</h4>
            <p>"Planning my honeymoon was a breeze thanks to this website. They provided personalized recommendations based on my preferences and made sure all the logistics were taken care of, from flights to excursions. My partner and I had the perfect getaway, and I’ll definitely be using this site again for future trips!"</p>
            <h4>- Amish Verma</h4>
        </div>
     </div>
        <div className="footer">
            <p>@ALL RIGHT RESERVED</p>
        </div> 
    </>
  )
}
