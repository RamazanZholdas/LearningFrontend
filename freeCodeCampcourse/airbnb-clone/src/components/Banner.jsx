import React from 'react'
import MainBannerImage from '../assets/banner.png'

function Banner() {
  return (
    <div className='flex justify-center mt-10'>
        <img src={MainBannerImage} alt="Just images" className='h-auto w-3/4'/>
    </div>
  )
}

export default Banner