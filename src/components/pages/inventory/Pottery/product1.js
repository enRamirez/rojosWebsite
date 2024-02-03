import React from 'react'
import './product1.css'


// export const Product1 = (props, addToCart) => {
//   const { id, type, price, invImage } = props.data
//   return (
//     <div className='product'>
//       <img src={invImage} />
//       <div className='invDescription'>
//         <p><b>{type}</b></p>
//         <p>${price}</p>
//       </div>
//       <button onClick={handleAddToCart} className='addToCartBtn'>Add To Cart</button>
//     </div>
//   )
// }


export const Product1 = (props) => {
  const { data, addToCart } = props;
  const { id, type, price, invImage } = data;

  const handleAddToCart = () => {
    addToCart(data);
  };

  return (
    <div className='product'>
      <img src={invImage} alt={type} />
      <div className='invDescription'>
        <p><b>{type}</b></p>
        <p>${price}</p>
      </div>
      <button onClick={handleAddToCart} className='addToCartBtn'>Add To Cart</button>
    </div>
  );
};