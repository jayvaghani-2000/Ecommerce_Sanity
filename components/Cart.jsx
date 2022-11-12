import Link from 'next/link'
import React,{ useRef } from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import { useStateContext } from '../Context/StateContext'
import { urlFor } from '../lib/client'

const Cart = () => {
  const {setShowCart,totalQuantities,totalPrice,cartItem,setCartItem} = useStateContext()
  return (
    <div className='cart-wrapper'>
      <div className='cart-container'>
        <button className='cart-heading' onClick={()=>{setShowCart(false)}}>
          <AiOutlineLeft />
          <span className='heading'>Your Cart</span>
          <span className='cart-num-items'>{`(${totalQuantities} items)`}</span>
        </button>
        {cartItem.length<1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size="150px" />
            <h3>Your Shopping Bag is Empty.</h3>
            <Link href='/'>
              <button type="button" className='btn' onClick={()=>{setShowCart(false)}}>Continue Shopping</button>
            </Link>
          </div>
        )}
        <div className='product-container'>
          {cartItem.length>=1 && cartItem.map((product,index)=>(
            <div className='product' key={product._id}>
              <img src={urlFor(product.image[0])} className='cart-product-image' />
              <div className='item-desc'>
                <div className='flex top'>
                  <h4>{product.name}</h4>
                  <h5>${product.price}</h5>
                </div>
                <div className='flex bottom'>
                  <div>
                    <p className='quantity-desc'>
                      <span className='minus' onClick={()=>{
                      }}><AiOutlineMinus /></span>

                      <span className='num'>{product.quantity}</span>

                      <span className='plus' onClick={()=>{}}><AiOutlinePlus /></span>
                    </p>
                  </div>
                  <button className='remove-item' onClick={()=>{}}><TiDeleteOutline/></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='cart-bottom'>
          <div className='total'>
            <h3>SubTotal:</h3>
            <h3>${totalPrice}</h3>
          </div>
          <div className='btn-container'>
              <button type="button" className='btn' onClick={()=>{}}>Pay with Stripe</button>
          </div>
        </div>
      </div>
    </div>
  )
}
              

export default Cart