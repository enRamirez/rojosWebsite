import React from 'react'
import { PRODUCTS1 } from './products1'
import { Product1 } from './product1'

const PotteryInv = () => {
    return (
        <div>
          <div  className='potteryInventory'>
            <h1>Take A Look At Our Pottery</h1>
          </div>
          <div className='products1'>
            {PRODUCTS1.map((product1) => <Product1 data={product1} />)}
          </div>
        </div>
      )
    }
    
    
    
    
    export default PotteryInv

