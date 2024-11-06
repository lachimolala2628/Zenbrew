import React from 'react'
import BadgeImage from '../public/assets/badge.svg'
import Image from 'next/image'

const Badge = ({containerStyles}) => {
    return (
        <div className={`relative ${containerStyles}`}>
            <Image src={BadgeImage} alt='Badge' fill className='object-contain'/>
        </div>
    )
}

export default Badge