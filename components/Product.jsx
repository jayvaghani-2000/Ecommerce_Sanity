import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Product = ({ product:{image,name,price,slug} }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img src={image.length && urlFor(image[0])}
            height="250px"
            width="250px"
            className='product-image'
          />
          <p className='product-name'>{name}</p>
          <p className='product-price'>${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product