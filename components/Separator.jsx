import React from 'react'
import Image from 'next/image';

const Separator = ({bg = 'white'}) => {
    
    const imgSrc = bg === 'accent' ? '/assets/separator-accent.svg' : '/assets/separator-white.svg';  

    return (
        <div className='relative w-[168px] h-[26px] mx-auto'>
            <Image src={imgSrc} fill alt='Raw Coffee' />
        </div>
    )
}

export default Separator