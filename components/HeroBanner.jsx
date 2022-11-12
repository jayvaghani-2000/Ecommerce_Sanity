import React from 'react'
import Link from "next/link"
import { urlFor } from '../lib/client'

const HeroBanner = ({heroBannerData:{smallText,midText,desc,buttonText,image,_id}}) => {
  return (
    <div className="hero-banner-container"> 

      <div>
        <p className='beats-solo'>{smallText}</p>
        <h3>{midText}</h3>
        <img src={urlFor(image)} alt="headphone" className="hero-banner-image" />
        <div>
          {/* <Link href={`product/${_id}`}> */}
            {/* <button type='button'>{buttonText}</button> */}
          {/* </Link> */}
          <div className='desc'>
            <h5>Description</h5>
            <p>{desc}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HeroBanner