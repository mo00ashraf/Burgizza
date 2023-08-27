import React from 'react'
import './Styles/Deals.css'
import { banner1, banner2, banner3, banner4 } from '../assets'

function Deals() {
    return (
        <div className='deals-container'>
        <ul className="banner-list">

            <li className="banner-item banner-lg">
                <div className="banner-card">

                    <img src={banner1} width="550" height="450" loading="lazy"
                        alt="Discount For Delicious Tasty Burgers!" className="banner-img" />
                    <div className="banner-item-content">
                        <p className="banner-subtitle">50% Off Now!</p>
                        <h3 className="banner-title">Discount For Delicious Tasty Burgers!</h3>
                        <p className="banner-text">Sale off 50% only this week</p>
                        <button className="button">Order Now</button>
                    </div>

                </div>
            </li>

            <li className="banner-item banner-sm">
                <div className="banner-card">

                    <img src={banner2} width="550" height="465" loading="lazy" alt="Delicious Pizza"
                    className="banner-img" />

                        <div className="banner-item-content">
                        <h3 className="banner-title">Delicious Pizza</h3>
                        <p className="banner-text">50% off Now</p>
                        <button className="button">Order Now</button>
                    </div>
                </div>
            </li>

            <li className="banner-item banner-sm">
                <div className="banner-card">

                    <img src={banner3} width="550" height="465" loading="lazy" alt="American Burgers"
                    className="banner-img" />

                    <div className="banner-item-content">
                        <h3 className="banner-title">American Burgers</h3>
                        <p className="banner-text">50% off Now</p>
                        <button className="button">Order Now</button>
                    </div>

                </div>
            </li>

            <li className="banner-item banner-md">
                <div className="banner-card">

                <img src={banner4} width="550" height="220" loading="lazy" alt="Tasty Buzzed Pizza"
                    className="banner-img" />

                <div className="banner-item-content">
                    <h3 className="banner-title">Tasty Buzzed Pizza</h3>
                    <p className="banner-text">Sale off 50% only this week</p>
                    <button className="button">Order Now</button>
                </div>

                </div>
            </li>

        </ul>
        </div>
    )
}

export default Deals