import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import logo from '../public/assets/logo.svg'

const links = [
    { href: '/', name: 'Home' },
    { href: '/', name: 'Explore' },
    { href: '/', name: 'About' },
    { href: '/', name: 'Menu' },
    { href: '/', name: 'Contact' },
]

const Footer = () => {
    return (
        <footer className='bg-footer bg-cover bg-no-repeat py-16 relative'>
            <div className='absolute top-0 w-full h-full bg-black/[0.90] z-10'></div>
            <div className="container z-20 mx-auto relative">
                <div className='flex flex-col items-center justify-center gap-14'>
                    <Link className='relative w-[120px] h-[50px] mx-auto' href={'/'}>
                        <Image src={logo} alt='Zenbrew' fill quality={100} priority className='object-contain' />
                    </Link>
                    <nav className='flex flex-col xl:flex-row gap-8 xl:gap-12 justify-center items-center '>
                        {
                            links.map((link, index) => {
                                return (
                                    <Link key={index} href={link.href} className='uppercase text-white tracking-widest hover:text-accent transition-all'>
                                        {link.name}
                                    </Link>
                                )
                            })
                        }
                    </nav>
                    <ul className='flex gap-4 text-white text-xl'>
                        <Link href={'/'} className='w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all'>
                            <FaFacebookF />
                        </Link>
                        <Link href={'/'} className='w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all'>
                            <FaTwitter />
                        </Link>
                        <Link href={'/'} className='w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all'>
                            <FaInstagram />
                        </Link>
                    </ul>
                    <div className='border-t border-white/10 text-white/70 font-light w-full flex items-center justify-center py-6 text-[15px]'>
                        <p>&copy; Copyright 2024 - Znebrew. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer