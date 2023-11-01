import React, { useEffect } from 'react'
import { PRODUCTS1 } from './products1'
import { Product1 } from './product1'
import Footer from '../../../Footer'

const PotteryInv = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
        <div>
          <div  className='potteryInventory'>
            <h1>Take A Look At Our Pottery</h1>
            <h6>Sizes are in inches from height to weight</h6>
          </div>
          <div className='products1'>
            {PRODUCTS1.map((product1) => <Product1 data={product1} />)}
          </div>
          <Footer/>
        </div>
      )
    }
        
    
    
    export default PotteryInv
