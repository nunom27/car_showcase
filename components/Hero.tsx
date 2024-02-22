import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='flex-1 pt-46 padding-x'>
            <h1 className='hrero__title'>
                Find, book or rent a car -- quickly and easily!
            </h1>

            <p className='hero__subtitle'>
                Streamline your car rental experience with our effortless booking process.
            </p>

            <CustomButton />
        </div>
    </div>
  )
}

export default Hero