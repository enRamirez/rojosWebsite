import React from 'react'

export const Product1 = (props) => {
  const { id, type, price, invImage } = props.data
  return (
    <div className='product'>
      <img src={invImage} />
      <div className='invDescription'>
        <p><b>{type}</b></p>
        <p>${price}</p>
      </div>
      <button className='addToCartBtn'>Add To Cart</button>
    </div>
  )
}
