import React from 'react'

export default function Home() {
  return (
    <>
    <div className="container">

<div className="burger-menu">
  <h2>Burger Menu</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquam quasi magni. Dolor dignissimos commodi sapiente voluptates voluptatum quos sint accusamus, soluta perferendis provident minus ullam nemo ratione alias. Et?</p>
  <div className="items">
    <div className="item">
        <img src="https://images.pexels.com/photos/2345975/pexels-photo-2345975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Fresh Burger" className="burger-bg"/>
        <div className="item-details">
            <h4 className="item-name">Fresh Burger</h4>
            <h5 className="item-price">$2.85</h5>
            <a href="/" className="buy-now-btn">Buy Now</a>
        </div>
    </div>
    <div className="item">
        <img src="https://cdn.pixabay.com/photo/2019/04/22/08/37/burger-4145977_1280.jpg" alt="Fresh Burger" className="burger-bg"/>
        <div className="item-details">
            <h4 className="item-name">Fresh Burger</h4>
            <h5 className="item-price">$2.85</h5>
            <a href="/" className="buy-now-btn">Buy Now</a>
        </div>
    </div>
    <div className="item">
        <img src="https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962997_1280.jpg" alt="Fresh Burger" className="burger-bg"/>
        <div className="item-details">
            <h4 className="item-name">Fresh Burger</h4>
            <h5 className="item-price">$2.85</h5>
            <a href="/" className="buy-now-btn">Buy Now</a>
        </div>
    </div>
    <div className="item">
        <img src="https://images.pexels.com/photos/19247582/pexels-photo-19247582/free-photo-of-close-up-photo-of-a-burger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Fresh Burger" className="burger-bg"/>
        <div className="item-details">
            <h4 className="item-name">Fresh Burger</h4>
            <h5 className="item-price">$2.85</h5>
            <a href="/" className="buy-now-btn">Buy Now</a>
        </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}
