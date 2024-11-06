import React from 'react'
import Image from 'next/image'

const MenuItem = ({ price, imgSrc, description, name }) => {
    return (
        <div className='flex items-center gap-4'>
            <div className='relative w-[60px] h-[60px] xl:w-[72px] rounded-full'>
                <Image src={imgSrc} alt={name} fill priority quality={100} className='object-cover' />
            </div>
            <div className='flex flex-col flex-1 gap-2 '>
                <div className='flex justify-between gap-4 items-baseline'>
                    <p className='upppercase font-primary font-semibold text-[22px] leading-none text-primary'>{name}</p>
                    <div className='flex-1 border-b border-dashed border-primary'></div>
                    <p className='leading-none font-primary font-semibold text-[30px] text-primary'>{price.toFixed(2)}</p>
                </div>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default MenuItem