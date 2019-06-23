import React, {Fragment} from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'

export default function Contact() {
    return (
       <Hero >
        <Banner title="Contact" subtitle="">
        <h5>Hello, you can reach out to me on appusrn@gmail.com</h5>
            <Link to="/" className="btn-primary">
            return home
            </Link>
        </Banner>
           </Hero>
    )
}
