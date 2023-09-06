import React from 'react'
import Hero from '../components/hero'
import Promo from '../components/Promo'
import Features from '../components/Features'
import Deals from '../components/Deals'
import Testimonials from '../components/Testimonials'
import Delivery from '../components/Delivery'
import BlogCards from '../components/BlogCards'

function Pages() {
    return (
        <div>
            <Hero />
            <Promo />
            <Features />
            <Delivery />
            <Deals />
            <BlogCards />
            <Testimonials />
        </div>
    )
}

export default Pages