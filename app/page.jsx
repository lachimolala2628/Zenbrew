'use client'
import React from 'react'
import { useEffect } from'react'
import Hero from '@/components/Hero'
import Explore from '@/components/Explore'
import About from '@/components/About'
import Menu from '@/components/Menu'
import Testimonial from '@/components/Testimonial'
import OpeningHours from '@/components/OpeningHours'

const Home = () => {

  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };

    loadLocomotiveScroll();
  },[]);

  return (
    <div className='h-full overflow-x-hidden'>
      <Hero />
      <Explore />
      <About />
      <Menu />
      <OpeningHours />
      <Testimonial />
    </div>
  )
}

export default Home