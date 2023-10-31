import React from 'react'
import { PRODUCTS2 } from './products2'
import { Product2 } from './product2'

const KnickKnackInv = () => {
    return (
        <div>
          <div  className='knickknackInventory'>
            <h1>Take A Look At Our KnickKnacks and Wood Art</h1>
          </div>
          <div className='products2'>
            {PRODUCTS2.map((product2) => <Product2 data={product2} />)}
          </div>
        </div>
      )
    }
    
    
    
    
    export default KnickKnackInv
