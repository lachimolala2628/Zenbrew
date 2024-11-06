'use client'
import React from 'react'
import Image from 'next/image'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import Navbar from './Nav/Navbar'
import Logo from '../public/assets/logo.svg'

const Header = () => {

    const [navActive, setNavAcitve] = useState(false);

    return (
        <header className='absolute top-[40px] z-[60] left-0 right-0'>
            <div className="container mx-auto">
                <div className='flex justify-between items-center'>
                    <Link href='/' className='relative w-[100px h-[40px] xl:w-[120px] xl:h-[40px] z-[60]'>
                        <Image src={Logo} alt='Logo' fill className='object-contain' />
                    </Link>
                    <button onClick={() => setNavAcitve(!navActive)} className='w-8 h-6 text-accent relative flex items-center justify-center z-[60] outline-none'>
                        <span className={`w-full h-[1.5px] bg-current absolute left-8 will-change-transform transition-transform durartion-300 ${navActive ? "top-1/2 rotate-45" : "top-0 translate-y-0"}`}></span>
                        <span className={`w-full h-[1.5px] bg-current absolute left-8 transition-opacity durartion-300 ${navActive ? "opacity-0" : "top-1/2"}`}></span>
                        <span className={`w-full h-[1.5px] bg-current absolute left-8 will-change-transform transition-transform durartion-300 ${navActive ? "top-1/2 -rotate-45" : "bottom-0 translate-y-0"}`}></span>
                    </button>
                </div>
            </div>
            <AnimatePresence mode='wait'>
                {navActive && <Navbar />}
            </AnimatePresence>
        </header>
    )
}

export default Header