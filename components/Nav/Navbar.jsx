'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Navlist from './Navlist'

const heightAnimation = {
    initial: {
        height: 0,
    },
    open: {
        height: '85vh',
        transition: { duration: 1, ease: [0.75, 0, 0.23, 1] }
    },
    close: {
        height: 0,
        transition: { duration: 1, ease: [0.75, 0, 0.23, 1] }
    }
}

const Navbar = () => {
    return (
        <motion.nav
            variants={heightAnimation}
            initial='initial'
            animate='open'
            exit='close'
            className='bg-primary overflow-hidden absolute z-[50] -top-full w-full '
        >
            <div className="container mx-auto h-full flex items-center justify-center">
                <Navlist />
            </div>
        </motion.nav>
    )
}

export default Navbar