import React from 'react'
import FooterBanner from '../components/FooterBanner';
import Product from '../components/Product';
import HeroBanner from '../components/HeroBanner';
import { client } from '../lib/client';

const Home = ({ product, banner }) => {
   return (
    <>
        <HeroBanner heroBannerData={banner.length && banner[0]}/>
      <div className='products-heading'>
        <h2>Best Selling</h2>
        <p>Speakers</p>
      </div> 

      <div className='products-container'>
        {product.map((product)=>{
          return <Product key={product._id} product={product}/>
        })}
      </div>

      <FooterBanner footerBannerData={banner.length && banner[0]}/>
    </>
  )
}

export const getServerSideProps = async() => {
  const query = '*[_type=="product"]'
  const product = await client.fetch(query)

  const bannerQuery = '*[_type=="banner"]'
  const banner = await client.fetch(bannerQuery)
  return {
    props:{product,banner}
  }
}

export default Home;