import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Testimonial from './components/Testimonial'
import LocomotiveScroll from 'locomotive-scroll';




function App() {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'> 
     <Navbar />
     <Landingpage />
     <Marquee />
     <About />
     <Eyes />
     <Featured />
     <Testimonial />
     <Cards />
     <Footer />
    </div>
  )
}

export default App
