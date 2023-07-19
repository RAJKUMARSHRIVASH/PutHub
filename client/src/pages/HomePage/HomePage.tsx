// import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Home from '../../components/HomePageItem/Home'
import BackToTop from '../../components/BacktoTop/BackToTop'

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <Home />
            <BackToTop />
            <Footer />
        </div>
    )
}
