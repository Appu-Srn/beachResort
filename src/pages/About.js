import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'

export default function About() {
    return (

        <Hero >
        <Banner title="About" subtitle="">
        <h6>A Beach resort room booking application build to enhance personal web development skills</h6>
            <Link to="/" className="btn-primary">
            return home
            </Link>
        </Banner>
           </Hero>
    )
}
